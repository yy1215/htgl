<template>
    <div>
        <div class="div-box mb30">
            <h4>我的合同</h4>
            <el-form class="form"  label-width="120px" :model="formInline">
                 <el-form-item  label="类型：" prop="type" >
                    <el-select v-model="formInline.jgStatus">
                        <el-option label="全部" value="all"></el-option>
                        <el-option label="配同工程合同" value=""></el-option>
                        <el-option label="易耗品" value=""></el-option>
                        <el-option label="仪器仪表" value=""></el-option>
                        <el-option label="通信产品" value=""></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="合同名称/编号：">
                    <el-input v-model="formInline.name"></el-input>
                </el-form-item>
                <el-button size="mini"  type="primary" @click="doFilter(formInline)">查询</el-button>
                <el-button size="mini"  @click="reset(formInline)">重置</el-button>
            </el-form>   
        </div> 
        <div class="div-box mb30">
            <div class="item-card "  v-for="itme in list">
                 <h5><i class="el-icon-school"></i> {{itme.title}}</h5>
                    <p>合同编号：{{itme.number}}</p>
                    <p>合同金额：{{itme.money}}</p>
                    <p>{{itme.status}} <el-button class="look" type="primary"  size="mini" plain>查看</el-button></p>
            </div>
        </div>
        <div class="div-box mb30">
            <h4>合同管理流程</h4>
            <img style="padding-top:20px;" src="../../assets/img/liucheng.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        formLabelWidth:'100px',
        formInline: {
          name: '',
          jgStatus:''
        },
        list:[
            {
                title:'河南电力通讯（北京）有限公司',
                number:'XYZ1234567898',
                money:'￥5000.00',
                status:'暂存'
            },
            {
                title:'工业和信息化部电信研究院',
                number:'XD201906260106',
                money:'￥250000.00',
                status:'待审'
            },
            {
                title:'广发银行股份有限公司',
                number:'XD201902220266',
                money:'￥150000.00',
                status:'执行'
            },
             {
                title:'宁波正德',
                number:'XYZ1234567898',
                money:'￥3000.00',
                status:'终止'
            },
            {
                title:'华翰投资集团有限公司',
                number:'XD201902150103',
                money:'￥80000.00',
                status:'完成'
            },
            {
                title:'新华联控股有限公司',
                number:'XD201904050111',
                money:'￥130000.00',
                status:'完成'
            }
        ]
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
        padding: 20px;
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
        .box-card{
            width: 33%;
            float: left;
        }
        .item-card{
            width: 32%;
            font-size: 14px;
            padding: 15px;
            float: left;
            box-sizing: border-box;
            background-color: #FFF;
            -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            margin-right: 15px;
            margin-bottom: 15px;
            &:nth-child(3),&:nth-child(6){
                margin-right: 0;
            }
            h5{
                font-size: 14px;
                font-weight: normal;
                margin: 0;
            }
            p{
                font-size: 13px;
                color: #666;
            }
            .look{
                padding: 5px 12px;
                float: right;
            }
        }
       
    }
   
</style>
