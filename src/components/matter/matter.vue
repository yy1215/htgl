<template>
    <div>
        <div class="div-box mb30">
            <el-form class="form"  label-width="100px" :model="formInline" ref="formInline">
                <el-form-item  label="合同类型：" prop="type1" >
                    <el-select v-model="formInline.type1">
                        <el-option label="全部" value="all"></el-option>
                        <el-option label="分销合同" value="分销合同"></el-option>
                        <el-option label="保密协议" value="保密协议"></el-option>
                        <el-option label="其他合同" value="其他合同"></el-option>
                        <el-option label="研制合同" value="研制合同"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="合同名称：" prop="name">
                    <el-input v-model="formInline.name"></el-input>
                </el-form-item>
                <el-form-item  label="责任人："  prop="principal" >
                    <el-select v-model="formInline.principal">
                        <el-option label="全部" value="all"></el-option>
                        <el-option label="直流设备" value="直流设备"></el-option>
                        <el-option label="易耗品" value="易耗品"></el-option>
                        <el-option label="仪器仪表" value="仪器仪表"></el-option>
                        <el-option label="通信产品" value="通信产品"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item  label="完成状态：" prop="status" >
                    <el-select v-model="formInline.status">
                        <el-option label="全部" value="all"></el-option>
                        <el-option label="未完成" value="未完成"></el-option>
                        <el-option label="已完成" value="已完成"></el-option>
                    </el-select>
                </el-form-item>
              
                <el-form-item  label="合同标签：" prop="tag" >
                    <el-select v-model="formInline.tag">
                        <el-option label="全部" value="all"></el-option>
                        <el-option label="发货" value="发货"></el-option>
                        <el-option label="跟进中" value="跟进中"></el-option>
                        <el-option label="第一期" value="第一期"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="我方公司：" prop="ourSide" >
                    <el-input v-model="formInline.ourSide"></el-input>
                </el-form-item>
                  <el-form-item label="对方公司："  prop="otherSide">
                    <el-input v-model="formInline.otherSide"></el-input>
                </el-form-item>
                <el-form-item  label="预计时间：" prop="time">
                   <el-date-picker
                    v-model="date"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item  label="事项类型："   prop="type2">
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="发货"></el-checkbox>
                        <el-checkbox label="其他"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item style="widht:40%;">
                    <el-button size="mini" type="primary" @click="doFilter(formInline)">查询</el-button>
                    <el-button size="mini" @click="reset(formInline)">重置</el-button>
                    <el-button size="mini" icon="el-icon-download"  @click="reset(formInline)">导出</el-button>
                </el-form-item>
            </el-form>   

             <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
                <el-table-column
                prop="projectName"
                label="合同/项目名称"
                >
                </el-table-column>
                <el-table-column
                prop="name"
                label="名称"
                >
                </el-table-column>
                <el-table-column
                prop="type"
                label="类型"
                >
                    <template slot-scope="scope">
                        <el-col class="" v-if="scope.row.type == 0">
                            <el-button  type="success" plain >发货</el-button>
                        </el-col>
                        <el-col class="" v-else-if="scope.row.type == 1">  
                            <el-button  type="primary" plain >跟进中</el-button>
                        </el-col>
                        <el-col class="" v-else>
                            <el-button  type="danger" plain >--</el-button>
                        </el-col>
                    </template>
                </el-table-column>
                <el-table-column
                prop="status"
                label="状态"
                >
                    <template slot-scope="scope">
                        <el-col class="" v-if="scope.row.status == 0">
                            <el-button  type="primary" plain >未完成</el-button>
                        </el-col>
                        <el-col class="" v-else-if="scope.row.status == 1">  
                            <el-button  type="success" plain >已完成</el-button>
                        </el-col>
                        <el-col class="" v-else>
                            <el-button  type="danger" plain >--</el-button>
                        </el-col>
                    </template>
                </el-table-column>
               <el-table-column
                prop="estimatedTime"
                label="预计时间">
                </el-table-column>
                <el-table-column
                prop="executionTime"
                label="执行时间">
                </el-table-column>
                <el-table-column
                width="80"
                prop="mark"
                label="备注">
                </el-table-column>
                <el-table-column
                prop="principal"
                label="负责人">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        type="primary"
                        @click="handleEdit(scope.$index, scope.row)" >编辑</el-button>
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
                    <el-form-item label="合同/项目名称：" :label-width="formLabelWidth">
                        <el-input v-model="editForm.projectName" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="名称" :label-width="formLabelWidth">
                        <el-input v-model="editForm.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="类型：" :label-width="formLabelWidth" prop="userRole" autocomplete="off">
                        <el-select v-model="editForm.type">
                            <el-option label="付款" value="all"></el-option>
                            <el-option label="收票" value="ru"></el-option>
                            <el-option label="回款" value="ch"></el-option>
                            <el-option label="开票" value="ch"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="状态" :label-width="formLabelWidth" prop="userRole" autocomplete="off">
                        <el-select v-model="editForm.status">
                            <el-option label="已完成" value="all"></el-option>
                            <el-option label="未完成" value="ru"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="预计时间:" :label-width="formLabelWidth">
                        <el-input v-model="editForm.estimatedTime" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="执行时间" :label-width="formLabelWidth" prop="affiliation" > 
                        <el-input v-model="editForm.executionTime" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="备注" :label-width="formLabelWidth" prop="affiliation" > 
                        <el-input v-model="editForm.mark" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="负责人" :label-width="formLabelWidth" prop="affiliation" > 
                        <el-input v-model="editForm.principal" autocomplete="off"></el-input>
                    </el-form-item>
                   
                </el-form>
                <span slot="footer" class="dialog-footer" style="text-align:center;">
                    <el-button  size="mini" @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary"  size="mini" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
        </div> 
       
    </div>
</template>
<script>
export default {
    data() {
      return {
        date:'',
        type:['付款'],
        checkList: ['回款'],
        dialogVisible: false,
         total:0,
        /*分页*/
        currentPage:1,
        pageSize:2,
        formLabelWidth:'120px',
        formInline: {
            type1:'',
            name:'',
            principal:'',
            status:'',
            tag:'',
            ourSide:'',
            otherSide:'',
            time:'',
            type2:'',
        },
         tableData: [
            {
                projectName:'配建学校外电源工程',
                name:'XD15223',
                type:0,
                status:0,
                estimatedTime:'2019-06-12',
                executionTime:'2019-08-03',
                mark:'--',
                principal:'陈小东'
            },
            {
                projectName:'京旺家园配建学校',
                name:'第一期',
                type:0,
                status:0,
                estimatedTime:'2019-06-12',
                executionTime:'2019-07-29',
                mark:'--',
                principal:'管理员'
            },
            {
                projectName:'北安河西区定向安置房',
                name:'XD1288',
                type:1,
                status:1,
                estimatedTime:'2018-03-12',
                executionTime:'2018-05-13',
                mark:'质保金',
                principal:'王月'
            },
            {
                projectName:'永乐花园',
                name:'交货期',
                type:0,
                status:0,
                estimatedTime:'2019-08-02',
                executionTime:'--',
                mark:'',
                principal:'李雅东'
            },
            {
                projectName:'公诚管理咨询有限公司',
                name:'1期续约款项',
                type:1,
                status:1,
                estimatedTime:'2019-05-06',
                executionTime:'--',
                mark:'...',
                principal:'王妮'
            }
        ],
        editForm: {
            materialCode:'	',
            name: '',
            unit:'',
            responsible:'',
            number:'',
            progres1:'%',
            progres2:'%',
            price:'',
            status:''
        },
      }
    },
     methods: {
        stateFormat(row, column) {
            if (row.state == true) {
            return '已完成'
            } else  {
            return '未完成'
            } 
        },
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
                float: left;
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
