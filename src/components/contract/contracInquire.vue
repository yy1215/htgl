<template>
    <div>
        <div class="div-box mb30">
         
            <el-form class="form"  label-width="120px" :model="formInline">
                <el-form-item label="合同名称/编号：">
                    <el-input v-model="formInline.name"></el-input>
                </el-form-item>
                 <el-form-item  label="合同类型：" prop="type" >
                    <el-select v-model="formInline.jgStatus">
                        <el-option label="配同工程合同" value="all"></el-option>
                        <el-option label="直流设备" value=""></el-option>
                        <el-option label="易耗品" value=""></el-option>
                        <el-option label="仪器仪表" value=""></el-option>
                        <el-option label="通信产品" value=""></el-option>
                    </el-select>
                </el-form-item>
                <el-button size="mini"  type="primary" @click="doFilter(formInline)">查询</el-button>
                <el-button size="mini"  @click="reset(formInline)">重置</el-button>
                <el-button size="mini" icon="el-icon-download"  @click="reset(formInline)">导出</el-button>
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
                prop="materialCode"
                label="合同名称/编号"
                width="200"
                >
                </el-table-column>
                <el-table-column
                prop="name"
                label="项目名称"
                width="150"
                >
                </el-table-column>
                <el-table-column
                prop="status"
                label="状态"
                width="80">
                    <template slot-scope="scope">
                        <el-col class="" v-if="scope.row.status == 0">
                            <el-button  type="success" plain >执行中</el-button>
                        </el-col>
                        <el-col class="" v-else-if="scope.row.status == 1">  
                            <el-button  type="primary" plain >跟进中</el-button>
                        </el-col>
                        <el-col class="" v-else>
                            <el-button  type="danger" plain >--</el-button>
                        </el-col>
                    </template>
                </el-table-column>
                <el-table-column
                prop="money"
                label="金额"
                >
                </el-table-column>
                <el-table-column
                prop="unit"
                label="我方/对方公司"
                >
                </el-table-column>
                <el-table-column
                prop="responsible"
                label="责任人/部门"
                width="100">
                </el-table-column>
               <el-table-column
                width="80"
                prop="progres1"
                label="资金进度">
                </el-table-column>
                <el-table-column
                 width="80"
                prop="progres2"
                label="发票进度">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        type="primary"
                        @click="handleEdit(scope.$index, scope.row)" >修改信息</el-button>
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
                    <el-form-item label="合同名称/编号" :label-width="formLabelWidth">
                        <el-input v-model="editForm.materialCode" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="项目名称:" :label-width="formLabelWidth">
                        <el-input v-model="editForm.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="状态" :label-width="formLabelWidth" prop="userRole" autocomplete="off">
                        <el-select v-model="editForm.status">
                            <el-option label="执行中" value="all"></el-option>
                            <el-option label="未执行" value="ru"></el-option>
                            <el-option label="已执行" value="ch"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="金额:" :label-width="formLabelWidth">
                        <el-input v-model="editForm.money" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="我方/对方公司" :label-width="formLabelWidth" prop="affiliation" > 
                        <el-input v-model="editForm.unit" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="责任人/部门" :label-width="formLabelWidth" prop="affiliation" > 
                        <el-input v-model="editForm.responsible" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="资金进度" :label-width="formLabelWidth" prop="affiliation" > 
                        <el-input v-model="editForm.progres1" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="发票进度" :label-width="formLabelWidth" prop="affiliation" > 
                        <el-input v-model="editForm.progres2" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer" style="text-align:center;">
                    <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" size="mini" @click="dialogVisible = false">确 定</el-button>
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
          jgStatus:''
        },
         tableData: [
            {
                materialCode:'永恒.长城里"项目1.3期施工用电施工工程XD201905120101',
                name: '用电施工工程',
                money:'￥1,000,000.00',
                unit:'北京建智达工程管理股份有限公司',
                responsible:'张明华',
                progres1:'0%',
                progres2:'0%',
                status:0
            },
            {
                materialCode:'宿舍数字化建设销售合同',
                name: '粤海工业智造产业中心项目一期11幢办公楼精装修工程',
                money:'￥8000,000.00',
                unit:'广州公共资源交易中心',
                responsible:'郑臣克',
                progres1:'20%',
                progres2:'0%',
                status:1
            }
        ],
        editForm: {
            materialCode:'	',
            name: '',
            money:'',
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
                &:nth-child(even){
                    margin-left: 2%;
                    margin-right: 2%;
                }
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
