<template>
    <div class="myReminder">
         <el-card class="box-card">
            <div slot="header" class="clearfix">
                  <h4>合同提醒</h4>
                <span class="checkList">
                    <el-radio-group  v-model="radio">
                        <el-radio-button style="border:noen;" label="今天">今天</el-radio-button>
                        <el-radio-button label="本月">本月</el-radio-button>
                        <el-radio-button label="本周">本周</el-radio-button>
                        <el-radio-button label="全年">全年</el-radio-button>
                    </el-radio-group>
                    <el-date-picker
                    v-model="date"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="回款"></el-checkbox>
                        <el-checkbox label="付款"></el-checkbox>
                        <el-checkbox label="开票"></el-checkbox>
                        <el-checkbox label="收票"></el-checkbox>
                        <el-checkbox label="发货"></el-checkbox>
                        <el-checkbox label="合同结束"></el-checkbox>
                        <el-checkbox label="其他"></el-checkbox>
                    </el-checkbox-group>
                </span>
            </div>
             <ul class="orderList">
                <li>
                    <img src="../../assets/img/user-icon.png" alt="">
                    <div class="text">
                        <span class="grey">事项到期提醒</span>
                        <p>【<strong class="blue">国家配网工程</strong>】的 <strong class="blue">发货</strong>事项 <strong class="blue">交货期</strong> 将于 <el-button type="danger" plain>2019-04-12</el-button>日到期,请注意</p>
                    </div>
                </li>
                 <li>
                    <img src="../../assets/img/user-icon.png" alt="">
                    <div class="text">
                        <span class="grey">事项到期提醒</span>
                        <p>【<strong class="blue">新村用户外部电力工程</strong>】的 <strong class="blue">发货</strong>事项，将于 <el-button type="danger" plain>2019-04-22</el-button>日到期,请注意</p>
                    </div>
                </li>
                 <li>
                    <img src="../../assets/img/user-icon.png" alt="">
                    <div class="text">
                        <span class="grey">合同到期提醒</span>
                        <p>【<strong class="blue">中关村创新园纬二路电力沟道工程</strong>】将于 <el-button type="danger" plain>2019-05-18</el-button>日到期,请注意</p>
                    </div>
                </li>
                 <li>
                    <img src="../../assets/img/user-icon.png" alt="">
                    <div class="text">
                        <span class="grey">合同到期提醒</span>
                        <p>【<strong class="blue">"永恒.长城里"项目1.3期施工用电施工工程</strong>】将于 <el-button type="danger" plain>2019-06-14</el-button>日到期,请注意</p>
                       
                    </div>
                </li>
                <li>
                    <img src="../../assets/img/user-icon.png" alt="">
                    <div class="text">
                        <span class="grey">合同到期提醒</span>
                        <p>【<strong class="blue">宿舍数字化后勤采购合同</strong>】将于 <el-button type="danger" plain>2019-07-30</el-button>日到期,请注意</p>
                    </div>
                </li>
            </ul>
        </el-card>
    </div>
</template>
<script>
export default {
    data(){
        return{
            radio:[],
            checkList: ['回款'],
            date: ''
        }
    }
}
</script>
<style lang="less">
.myReminder{
    h4{
        font-size: 16px;
        font-weight: normal;
        margin: 0 0 10px;
    }
    .checkList{
        width: 100%;
        display: inline-block;
        margin-left: 15px;
        .el-checkbox{
            margin-right: 13px;
        }
    }
    .el-checkbox-group{
        display: inline-block;
    }
    .el-radio-button__inner{
        padding: 5px 10px !important;
        border:none;
    }
    .el-radio-button:first-child .el-radio-button__inner{
        border-left: 0;
    }
    .el-radio-button:last-child .el-radio-button__inner,.el-radio-button:first-child .el-radio-button__inner{
        border-radius: 0 !important;
    }
    .orderList{
        padding: 0;
        li{
            overflow: hidden;
            list-style-type: none;
            color: #666;
            padding-top: 15px;
            border-bottom: 1px solid #eee;
            img{
                float: left;
                margin-right: 10px;
            }
            p{
                margin-top: 5px;
            }
            .el-button{
                padding: 3px 10px;
                margin-right: 5px;
            }
            .text{
                float: left;
            } 
            .blue{
                font-weight: normal;
                color: #1890ff;
            }
            .grey{
                color: #ccc;
            }
        }
    }
}
    
</style>
