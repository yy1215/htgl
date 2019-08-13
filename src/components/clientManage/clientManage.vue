<template>
    <div>
        <div class="div-box mb30">
            <el-form class="form"  label-width="120px" :model="formInline" ref="formInline">
                <el-form-item  label="公司类型：" prop="type" >
                    <el-select v-model="formInline.type">
                        <el-option label="有限责任公司" value="有限责任公司"></el-option>
                        <el-option label="股份制公司" value="股份制公司"></el-option>
                        <el-option label="集团公司" value="集团公司"></el-option>
                        <el-option label="个人独资" value="个人独资"></el-option>
                        <el-option label="合伙企业" value="合伙企业"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="公司名称：" prop="name">
                    <el-input v-model="formInline.name"></el-input>
                </el-form-item>
                <el-button size="mini" type="primary" @click="doFilter(formInline)">查询</el-button>
                <el-button size="mini" @click="reset(formInline)">重置</el-button>
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
                label="公司名称"
                style="color:blue"
                >
                </el-table-column>
                <el-table-column
                prop="creditCode"
                label="统一社会信用代码 / 税号"
                >
                </el-table-column>
               
                <el-table-column
                prop="money"
                label="开户行 / 账户"
                >
                </el-table-column>
                <el-table-column
                prop="tel"
                label="联系人 / 电话"
                >
                </el-table-column>
                <el-table-column
                prop="address"
                label="公司地址">
                </el-table-column>
               <el-table-column
                width="80"
                prop="mark"
                label="备注">
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
                    <el-form-item label="公司名称" :label-width="formLabelWidth">
                        <el-input v-model="editForm.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="信用代码:" :label-width="formLabelWidth">
                        <el-input v-model="editForm.creditCode" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="开户行 / 账户:" :label-width="formLabelWidth">
                        <el-input v-model="editForm.money" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人 / 电话" :label-width="formLabelWidth" prop="affiliation" > 
                        <el-input v-model="editForm.tel" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="公司地址" :label-width="formLabelWidth" prop="affiliation" > 
                        <el-input v-model="editForm.address" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="备注" :label-width="formLabelWidth" prop="affiliation" > 
                        <el-input v-model="editForm.mark" autocomplete="off"></el-input>
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
        dialogVisible: false,
         total:0,
        /*分页*/
        currentPage:1,
        pageSize:2,
        formLabelWidth:'100px',
        formInline: {
          name: '',
          type:''
        },
         tableData: [
            {
                name:'合肥信息化公司',
                creditCode: '--',
                money:'招商银行',
                tel:'--',
                address:'安徽省合肥市',
                mark:'--',
            },
            {
                name:'华翰投资集团有限公司',
                creditCode: '--',
                money:'浦发银行',
                tel:'--',
                address:'上海浦东新区',
                mark:'--',
            },
            {
                name:'北京龙冠房地产开发有限责任公司',
                creditCode: '--',
                money:'工商银行',
                tel:'--',
                address:'广东省北京三里屯',
                mark:'暂停',
            },
            {
                name:'河北永恒房地产开发有限公司',
                creditCode: '--',
                money:'建设银行',
                tel:'--',
                address:'河北省',
                mark:'暂停',
            },
            {
                name:'北京市供用电建设承发包公司',
                creditCode: '--',
                money:'建设银行',
                tel:'--',
                address:'北京市',
                mark:'暂停',
            },
            {
                name:'新华联控股有限公司',
                creditCode: '--',
                money:'中国银行',
                tel:'--',
                address:'北京市',
                mark:'暂停',
            },
            {
                name:'宝清县农业局',
                creditCode: '--',
                money:'建设银行',
                tel:'--',
                address:'河北省',
                mark:'--',
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
            .el-table_1_column_4 {
                 color: #52c41a;
                &:nth-child(3){
                    color: #52c41a;
                }
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
