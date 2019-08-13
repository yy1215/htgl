<template>
    <div >
         <el-tabs type="border-card">
            <el-tab-pane label="合同自定义字段">
                <el-table
                ref="multipleTable"
                :data="tableData1"
                tooltip-effect="dark"
                style="width: 100%"
                >
                    <el-table-column
                    prop="name"
                    label="字段名"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="type"
                    label="类型"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="whether"
                    label="是否必填"
                    >
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
                             <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-button  class="add-btn" icon="el-icon-plus"  @click="handleAdd">新增</el-button>
            </el-tab-pane>
            <el-tab-pane label="合同类型">
                <el-table
                ref="multipleTable"
                :data="tableData2"
                tooltip-effect="dark"
                style="width: 100%"
               >
                    <el-table-column
                    prop="name"
                    label="合同类型名"
                    >
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
                             <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-button  class="add-btn" icon="el-icon-plus"  @click="handleAdd">新增</el-button>
            </el-tab-pane>
            <el-tab-pane label="产品类型">
                <el-table
                ref="multipleTable"
                :data="tableData3"
                tooltip-effect="dark"
                style="width: 100%"
               >
                    <el-table-column
                    prop="name"
                    label="产品类型名"
                    >
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
                             <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-button  class="add-btn" icon="el-icon-plus"  @click="handleAdd">新增</el-button>
            </el-tab-pane>
        </el-tabs>

         
        <!-- 编辑 -->
        <el-dialog class="editFrom" title="编辑" :visible.sync="dialogVisible"  width="50%">
            <el-form>
                <el-form-item label="字段名:" :label-width="formLabelWidth">
                    <el-input v-model="editForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="类型:" :label-width="formLabelWidth">
                    <el-input v-model="editForm.type" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="是否必填" :label-width="formLabelWidth" prop="affiliation" > 
                    <el-input v-model="editForm.whether" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="备注" :label-width="formLabelWidth" prop="affiliation" > 
                    <el-input v-model="editForm.mark" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer" style="text-align:center;">
                <el-button size="medium" @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" size="medium" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
      return {
        dialogVisible:false,
        formLabelWidth:'120px',
        tableData1: [
            {
                name:'合同增项',
                type:'金额',
                whether:'选填',
                mark:'--',
            },
            {
                name:'收款日期',
                type:'日期',
                whether:'选填',
                mark:'--',
            },
            {
                name:'测试自定义',
                type:'字符串',
                whether:'选填',
                mark:'--',
            },
            {
                name:'执行日期',
                type:'日期',
                whether:'选填',
                mark:'--',
            },
             {
                name:'状态',
                type:'字符串',
                whether:'选填',
                mark:'合同状态',
            }
        ],
        tableData2: [
            {
                name:'分销合同',
                mark:'--',
            },
            {
                name:'保密协议',
                mark:'--',
            },
            {
                name:'设备合同',
                mark:'--',
            },
            {
                name:'电力改造合同',
                mark:'--',
            },
            {
                name:'供电合同',
                mark:'--',
            }, 
            {
                name:'其他合同',
                mark:'--',
            },],
         tableData3: [
            {
                name:'商业',
                mark:'--',
            },
            {
                name:'住宅',
                mark:'--',
            },
            {
                name:'政府',
                mark:'--',
            },
            {
                name:'写字楼',
                mark:'--',
            },
            {
                name:'基础设施',
                mark:'--',
            },
            {
                name:'教育及研发基地',
                mark:'--',
            },
            {
                name:'商铺',
                mark:'--',
            },
            {
                name:'会展中心',
                mark:'--',
            },
            {
                name:'停车厂',
                mark:'--',
            }
         ],
        editForm: {
            name:'',
            type:'',
            whether:'',
            mark:'',
        },
      }
    },
    methods: {
       /* 新增 */
        handleAdd(index, row) {
            this.$router.push({
                path:"/addUser",
            });
        },
        /* 编辑 */
        handleEdit(index, row) {
            this.dialogVisible = true //显示弹框
            this.editForm = Object.assign({}, row);
        },
        handleDelete(index, row) {
            this.tableData1.splice(index,1)
            console.log(row.id);
           
        },
    }
}
</script>

<style lang="less" scoped>
    .add-btn{
        width: 100%;
        margin-top: 20px;
    }
     .editFrom{
        .el-form{
            overflow: hidden;
        }
        .el-form-item{
            width: 50%;
            float: left;
        }
    }
</style>
