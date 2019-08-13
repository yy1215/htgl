<template>
    <div>
        <div class="div-box mb30">
            <h4>合基本信息</h4>
            <el-form class="form"  label-width="120px" :model="formLabelAlign">
                <el-form-item label="合同编号：">
                    <el-input v-model="formLabelAlign.number"></el-input>
                </el-form-item>
                <el-form-item label="合同名称：">
                    <el-input v-model="formLabelAlign.contractName"></el-input>
                </el-form-item>
                <el-form-item label="客户名称：">
                    <el-input v-model="formLabelAlign.clientName"></el-input>
                </el-form-item>
                <el-form-item label="项目名称：">
                    <el-input v-model="formLabelAlign.projectName"></el-input>
                </el-form-item>
                <el-form-item label="主合同：">
                    <el-input v-model="formLabelAlign.main"></el-input>
                </el-form-item>
                <el-form-item label="签订日期">
                    <el-input v-model="formLabelAlign.date" ></el-input>
                </el-form-item>
                 <el-form-item  label="合同类型：：" prop="jgStatus" >
                    <el-select v-model="formLabelAlign.jgStatus">
                        <el-option label="配同工程合同" value="all"></el-option>
                        <el-option label="直流设备" value=""></el-option>
                        <el-option label="易耗品" value=""></el-option>
                        <el-option label="仪器仪表" value=""></el-option>
                        <el-option label="通信产品" value=""></el-option>
                        <el-option label="静止无功补偿成套设备(SVC)" value=""></el-option>
                        <el-option label="机械产品" value=""></el-option>
                        <el-option label="工器具" value=""></el-option>
                        <el-option label="电源" value=""></el-option>
                        <el-option label="电工产品" value=""></el-option>
                        <el-option label="串补" value=""></el-option>
                        <el-option label="材料产品" value=""></el-option>
                        <el-option label="办公自动化产品" value=""></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注：">
                    <el-input v-model="formLabelAlign.mark"></el-input>
                </el-form-item>
            </el-form>   
        </div> 
        <div class="div-box">
            <h4>资金计划   <el-button type="primary"  size="mini" @click="handleAdd">新增</el-button></h4>
            <el-table
            :data="tableData"
            border
            style="width: 100%">
                <el-table-column
                prop="number"
                label="序号"
                width="80">
                </el-table-column>
                <el-table-column
                prop="date"
                label="预计收款日期"
                width="">
                </el-table-column>
                <el-table-column
                prop="money"
                label="预计收款金额">
                </el-table-column>
                 <el-table-column
                prop="mark"
                label="备注"
                width="">
                </el-table-column>
                 <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        type="danger"
                        plain
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        dialogVisible:false,
        formLabelWidth:'100px',
        formLabelAlign: {
            number:'',
            contractName:'XD1626',
            clientName:'广州邦正电力科技有限公司',
            projectName: '电信研究院翠湖科研基地建设...',
            main:'XD1005',
            date:'2009-01-01',
            mark: '--',
           
        },
        tableData: [{
            number: '1',
            date: '2016-05-02',
            money: '￥1,000,000.00',
            mark:'---'
        }, {
          number: '2',
          date: '2016-05-02',
          money: '￥7,000,000.00',
          mark:'---'
        }, {
           number: '3',
          date: '2016-05-02',
          money: '￥800,000.00',
          mark:'---'
        }, {
          number: '4',
          date: '2016-05-02',
          money: '￥6,000,000.00',
          mark:'---'
        }],
        
      }
    },
     methods: {
         /* 新增 */
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
     }
}
</script>
<style lang="less" scoped>
    .div-box{
        background: #fff;
        padding: 15px;
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
                width: 40%;
                float: left;
                &:nth-child(even){
                    margin-left: 10%;
                }
                .el-form-item__label{
                    width: 100px;
                }
            }
        }
        .el-table{
            box-shadow: none;
        }
    }
   
</style>
