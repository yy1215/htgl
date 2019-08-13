<template>
    <div>
        <div class="left-content">
            <el-card class="box-card mb30">
                <div slot="header" class="clearfix">
                    <span>待我审批的合同</span>
                </div>
                 <div class="no-content">暂无数据</div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>合同/项目计划</span>
                    <span class="checkList">
                        <span><i class="header-icon status-dot"></i> 已完成</span> 
                        <span><i class="header-icon status-dot error"></i> 未完成</span>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox label="回款"></el-checkbox>
                            <el-checkbox label="付款"></el-checkbox>
                            <el-checkbox label="开票"></el-checkbox>
                            <el-checkbox label="收票"></el-checkbox>
                            <el-checkbox label="发货"></el-checkbox>
                            <el-checkbox label="其他"></el-checkbox>
                        </el-checkbox-group>
                    </span>
                </div>
                <div class="content">
                    <div class="content-head hide">
                        <select>
                            <option>2019年</option>
                            <option>2018年</option>
                            <option>2017年</option>
                            <option>2016年</option>
                            <option>2015年</option>
                            <option>2014年</option>
                        </select>
                        <select>
                            <option>1月</option>
                            <option>2月</option>
                            <option>3月</option>
                            <option>4月</option>
                            <option>6月</option>
                            <option>7月</option>
                            <option>8月</option>
                            <option>9月</option>
                            <option>10月</option>
                            <option>11月</option>
                            <option>12月</option>
                        </select>
                        <el-radio-group  v-model="radio">
                            <el-radio-button style="border:noen;" label="月">月</el-radio-button>
                            <el-radio-button label="年">年</el-radio-button>
                        </el-radio-group>
                    </div>
                    <el-calendar v-model="value"></el-calendar>
                </div>
            </el-card>
          
        </div>
        <div class="right-content">
            <el-card class="box-card  mb30">
                <div slot="header" class="clearfix">
                    <span>文件列表</span>
                </div>
                <div class="content">
                   <el-collapse accordion>
                        <el-collapse-item>
                            <template slot="title">
                            <i class="header-icon el-icon-caret-right"></i> 企业资料
                            </template>
                            <div class="pl20">合同列表.xlsx</div>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                            <i class="header-icon el-icon-caret-right "></i> 合同套打模板
                            </template>
                            <div class="pl20">合同套打模板.docx</div>
                        </el-collapse-item>
                        <el-collapse-item title="其他">
                            <template slot="title">
                            <i class="header-icon el-icon-caret-right"></i> 其他
                            </template>
                            <div class="pl20">暂无内容</div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>动态</span>
                </div>
                <div class="text item">
                    <img class="user-pic" src="../../assets/img/user-icon.png" alt="">
                    <p class="p">管理员 新增了合同<font color="#409EFF">内容表单提交关联表单和发布 </font><br>
                     <span>1天前</span>
                    </p>
                </div>
                <div class="text item">
                    <img class="user-pic" src="../../assets/img/user-icon.png" alt="">
                    <p class="p">管理员 新增了合同<font color="#409EFF">仁和通</font><br>
                     <span>1天前</span>
                    </p>
                </div>
                <div class="text item">
                    <img class="user-pic" src="../../assets/img/user-icon.png" alt="">
                    <p class="p">管理员 修改了<font color="#409EFF">天津市政项目</font>的信息，合同状态由已归档修改为已签合同<br>
                     <span>2天前</span>
                    </p>
                </div>
                <div class="text item">
                    <img class="user-pic" src="../../assets/img/user-icon.png" alt="">
                    <p class="p">管理员 修改了<font color="#409EFF"> 棠下小学</font>的信息，合同状态由已签合同修改为已归档<br>
                     <span>2天前</span>
                    </p>
                </div>
                <div class="text item">
                    <img class="user-pic" src="../../assets/img/user-icon.png" alt="">
                    <p class="p">管理员 新增了<font color="#409EFF">1号项目高级工程</font><br>
                     <span>2天前</span>
                    </p>
                </div>
                <div class="text item">
                    <img class="user-pic" src="../../assets/img/user-icon.png" alt="">
                    <p class="p">管理员 修改了<font color="#409EFF">国家电网项目</font>的信息，合同状态由已签合同修改为已完成<br>
                     <span>2天前</span>
                    </p>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>
export default {
    data()  {
       return {
        radio:[],
        checkList: ['回款'],
        value: new Date(),
        list:[{
            'text':'管理员 新增了合同内容表单提交关联表单和发布',
            'time':'1 天前'
         },{
            'text':'管理员 修改了 国家电网项目 的信息 合同状态由已签合同修改为已完成',
            'time':'2 天前'
         },{
            'text':'管理员 修改了 国家电网项目 的信息 合同状态由已验收修改为已签合同',
            'time':'2 天前'
         },{
            'text':'管理员 修改了 张庄小学教育装备采购 的信息 结束时间由2020-08-06修改为2020-08-07',
            'time':'3 天前'
         },{
            'text':'管理员 新增了合同 内容表单提交关联表单和发布',
            'time':'3 天前'
         }]
      };
    }
   
}
</script>
<style lang="less" scoped>
    .left-content{
        width: 60%;
        float: left;
        background: #F0F2F5;
        float:left;
        .status-dot{
            width: 6px;
            height: 6px;
            display: inline-block;
            border-radius: 50%;
            vertical-align: middle;
            position: relative;
            top: -1px;
            background-color: #52c41a;
            &.error{
                 background-color: #f5222d;
            }
        }
        .checkList{
            width: 80%;
            display: inline-block;
            margin-left: 15px;
            span{
                color: #666;
                font-size: 14px;
                float: left;
                margin-right: 10px;
            }
            .el-checkbox{
                margin-right: 13px;
            }
        }
        .content-head{
            text-align: right;
            select{
                height: 38px;
                color: #666;
                border-color: #dcdfe6;
            }
        }
    }
    .right-content{
        width: 38%;
        background: #F0F2F5;
        float: right;
        .item{
            overflow: hidden;
            border-bottom: 1px solid #eee;
            padding-top: 10px;
            &:last-child{
                border-bottom: 0;
            }
            .user-pic{
                float: left;
                margin-right: 10px;
            }
            p{
                width: 80%;
                float: left;
                margin-top: 0;
                span{
                    color: #999;
                }
            }
        }
    }

    .content{
        padding: 16px 10px;
       
    }
   
</style>
