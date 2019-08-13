<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane label="发给我的工单">
                <div class="no-content">
                    <img src="../../assets/img/no-content1.png" alt="">
                    <p>暂无数据</p>   
                </div>
            </el-tab-pane>
            <el-tab-pane label="我发出的工单">
                <ul class="orderList">
                    <li>
                        <img src="../../assets/img/user-icon.png" alt="">
                        <div class="text">
                            <el-button>管理员</el-button> 在 <strong class="blue">钢结构变电站</strong>  为 <el-button>小赵</el-button>创建了工单未完结
                            <p>2019年8月2日 <el-button type="success" plain>已处理</el-button></p>
                        </div>
                    </li>
                    <li>
                        <img src="../../assets/img/user-icon.png" alt="">
                        <div class="text">
                            <el-button>管理员</el-button> 在 <strong class="blue">宿舍数字化建设销售合同</strong> 为 <el-button>李四</el-button>创建了工单
                            <p>2019年8月2日 <el-button type="primary" plain>未处理</el-button></p>
                        </div>
                    </li>
                    <li>
                        <img src="../../assets/img/user-icon.png" alt="">
                        <div class="text">
                            <el-button>管理员</el-button> 在 <strong class="blue">我的4月周期合同</strong> 为 <el-button>郭玲</el-button>创建了工单补充
                            <p>2019年8月2日 <el-button type="success" plain>已处理</el-button></p>
                        </div>
                    </li>
                    <li>
                        <img src="../../assets/img/user-icon.png" alt="">
                        <div class="text">
                            <el-button>管理员</el-button> 在 <strong class="blue">办公设备采购合同</strong>  为 <el-button>张浩</el-button>创建了工单合同的尾款
                            <p>2019年8月2日 <el-button type="primary" plain>未处理</el-button></p>
                        </div>
                    </li>
                </ul>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
     data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style lang="less" scoped>
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
        }
    }
</style>
