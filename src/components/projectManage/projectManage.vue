<template>
    <div>
        <div class="div-box mb30">
            <el-form class="form"  label-width="90px" :model="formInline" ref="formInline">
                <el-form-item label="项目名称：">
                    <el-input v-model="formInline.name"></el-input>
                </el-form-item>
          
                <el-form-item  label="项目标签" prop="tag" >
                    <el-select v-model="formInline.tag">
                         <el-option label="全部" value="all"></el-option>
                        <el-option label="山东" value="山东"></el-option>
                        <el-option label="78" value="78"></el-option>
                        <el-option label="55" value="55"></el-option>
                        <el-option label="天津" value="天津"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item  label="公司类型：" prop="type" >
                    <el-select v-model="formInline.type">
                        <el-option label="有限责任公司" value="有限责任公司"></el-option>
                        <el-option label="股份制公司" value="股份制公司"></el-option>
                        <el-option label="集团公司" value="集团公司"></el-option>
                        <el-option label="个人独资" value="个人独资"></el-option>
                        <el-option label="合伙企业" value="合伙企业"></el-option>
                    </el-select>
                </el-form-item>
              
                <el-button size="mini"  type="primary" @click="doFilter(formInline)">查询</el-button>
                <el-button size="mini"  @click="reset(formInline)">重置</el-button>
                <el-button size="mini" icon="el-icon-download" @click="reset(formInline)">导出</el-button>
            </el-form>   

             <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                prop="name"
                label="项目名称"
                 width="200">
                </el-table-column>
                <el-table-column
                prop="status"
                label="项目状态">
                    <template slot-scope="scope">
                        <el-col class="" v-if="scope.row.status == 0">
                            <el-button  type="success" plain >已立项</el-button>
                        </el-col>
                        <el-col class="" v-else-if="scope.row.status == 1">
                            <el-button  type="warning" plain >已招采</el-button>
                        </el-col>
                        <el-col class="" v-else-if="scope.row.status == 2">
                            <el-button  type="info" plain >已验收</el-button>
                        </el-col>
                        <el-col class="" v-else-if="scope.row.status == 3">  
                            <el-button  type="primary" plain >已完成</el-button>
                        </el-col>
                        <el-col class="" v-else>
                            <el-button  type="danger" plain >已签合同</el-button>
                        </el-col>
                    </template>
                </el-table-column>
                <el-table-column
                prop="introduction"
                label="项目简介"
                width="300"
                >
                </el-table-column>
                <el-table-column
                prop="responsible"
                label="责任人员"
                >
                </el-table-column>
                <el-table-column
                prop="startTime"
                label="开始时间"
                >
                </el-table-column>
                <el-table-column
                prop="endTime"
                label="结束时间">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        type="primary"
                        @click="handleEdit(scope.$index, scope.row)" >修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <div class="block">
                <el-pagination 
                    @size-change="handleSizeChange" 
                    @current-change="handleCurrentChange"
                    :page-size="pageSize"
                    :current-page="currentPage" 
                    :page-sizes="[2, 4,6]" 
                    layout="prev, pager, next"
                    :total="total">
                    </el-pagination>
            </div>

            <!-- 编辑 -->
            <el-dialog class="editFrom" title="编辑" :visible.sync="dialogVisible"  width="50%">
                <el-form>
                    <el-form-item label="项目名称" :label-width="formLabelWidth">
                        <el-input v-model="editForm.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="项目状态" :label-width="formLabelWidth" prop="userRole" autocomplete="off">
                        <el-select v-model="editForm.status">
                            <el-option label="执行中" value="all"></el-option>
                            <el-option label="未执行" value="ru"></el-option>
                            <el-option label="已执行" value="ch"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="项目简介:" :label-width="formLabelWidth">
                        <el-input v-model="editForm.introduction" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="责任人员" :label-width="formLabelWidth" prop="affiliation" > 
                        <el-input v-model="editForm.responsible" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="开始时间" :label-width="formLabelWidth" prop="affiliation" > 
                        <el-input v-model="editForm.startTime" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="结束时间" :label-width="formLabelWidth" prop="affiliation" > 
                        <el-input v-model="editForm.endTime" autocomplete="off"></el-input>
                    </el-form-item>
                   
                </el-form>
                <span slot="footer" class="dialog-footer" style="text-align:center;">
                    <el-button size="medium" @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" size="medium" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
        </div> 
       
    </div>
</template>
<script>
export default {
    data() {
      return {
        dialogVisible: false,
         total:0,
        /*分页*/
        currentPage:1,
        pageSize:2,
        formLabelWidth:'100px',
        formInline: {
          name: '',
          tag:[],
          type:''
        },
         tableData: [
            {
                name:'M5运河1号项目高级工程',
                status:0,
                introduction: '北京丹霞房地产开发有限公司',
                responsible:'白泉',
                startTime:'2017-08-09',
                endTime:'2019-07-10',
            },
            {
                name:'500千伏输变电工程',
                status:1,
                introduction: '被列入广东省揭阳市"十二五"',
                responsible:'汪磊',
                startTime:'2016-08-25',
                endTime:'2019-05-25',
            },
            {
                name:'安徽电力工程',
                status:2,
                introduction: '京市朝阳区高碑店半壁店村民委员会  ',
                responsible:'张朝',
                startTime:'2017-07-06',
                endTime:'2019-08-10',
            },
            {
                name:'国家电网项目',
                status:3,
                introduction: '国家电网山东项目，共计3个电厂设备维保',
                responsible:'杨波',
                startTime:'2017-12-29',
                endTime:'2019-08-30',
            },
            {
                name:'天津市政项目',
                status:4,
                introduction: '天津销售项目',
                responsible:'王吉',
                startTime:'2018-02-24',
                endTime:'2019-07-03',
            }
        ],
        editForm: {
            name:'',
            status:'',
            introduction: '',
            responsible:'',
            startTime:'',
            endTime:''
        },
      }
    },
     methods: {
        doFilter(keywords) {
           this.$refs.formInline.validate((valid) => {
                if (valid) {
                    console.log(valid);
                    //alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        /* 重置  */
        reset(){
            this.$refs.formInline.resetFields();
        },
        toggleSelection(rows) {
            if (rows) {
            rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
            });
            } else {
            this.$refs.multipleTable.clearSelection();
            }
        },
        change:function(index,row){
            console.log(index,row);
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleAdd(index, row) {
            this.$router.push({
                path:"/addUser",
            });
            console.log(index, row);
        },
        /* 编辑 */
        handleEdit(index, row) {
            console.log(index, row);
            this.dialogVisible = true //显示弹框
            this.editForm = Object.assign({}, row);
        },
        handleDelete(index, row) {
            this.tableData.splice(index,1)
            console.log(row.id);
           
        },
        /*控制分页*/
        handleSizeChange(val) {
            this.pageSize = val;
            this.getPageList();
        },

        handleCurrentChange(val) {
            this.currentPage=val,
            this.getPageList();
        }
     }
}
</script>
<style lang="less" scoped>
    .div-box{
        background: #fff;
        padding: 15px;
        padding-top: 30px;
        overflow: hidden;
        border-radius: 3px;
        -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        h4{
            font-size: 16px;
            font-weight: normal;
            margin: 0 0 10px;
        }
        .form{
            .el-form-item{
                width: 25%;
                float: left;
                margin-right: 1%;
            }
        }
        .el-table{
            box-shadow: none;
            .el-button{
                padding: 4px 10px;
            }
        }
    }
    .editFrom{
        .el-form-item{
            width: 50%;
            float: left;
        }
    }
</style>
