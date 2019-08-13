import Vue from 'vue'
import VueRouter  from 'vue-router'
import login from '@/components/login'
import notFound from '@/components/404.vue'
import home from '@/components/home'
import index from '@/components/index/index'
import contractNew from '@/components/contract/contractNew'
import contracInquire from '@/components/contract/contracInquire'
import contractApproval from '@/components/contract/contractApproval'
import myOrder from '@/components/myOrder/myOrder'
import clientManage from '@/components/clientManage/clientManage'
import finance from '@/components/finance/finance'
import projectManage from '@/components/projectManage/projectManage'
import matter from '@/components/matter/matter'
import myReminder from '@/components/myReminder/myReminder'
import corporateDocuments from '@/components/corporateDocuments/corporateDocuments'
import systemSettings from '@/components/systemSettings/systemSettings'


import addUser from '@/components/systemManagement/addUser'


Vue.use(VueRouter)
  let routes =  [
    {
      path: '/login',
      name: '系统登录',
      component: login,
      hidden: true
    },
    {
      path: '/404',
      component: notFound,
      name: '',
      hidden: true
    },
    {
      path: '/',
      component: home,
      name: '',
      iconCls: 'fa fa-bar-chart',
      leaf: true,//只有一个节点
      children:[
        {
          path: '/index',
          name: '首页',
          component: index,
        }
      ]
    },
    {
      path: '/',
      component: home,
      name: '合同管理',
      iconCls: 'fa fa-bar-chart',
      children:[
        {
          path: '/contractNew',
          name: ' 合同新建',
          component: contractNew
        },
        {
          path: '/contracInquire',
          name: ' 合同查询',
          component: contracInquire
        },
        {
          path: '/contractApproval',
          name: ' 合同审批',
          component: contractApproval
        }
      ]
    },
    {
      path: '/',
      component: home,
      name: '',
      iconCls: 'fa fa-bar-chart',
      leaf: true,//只有一个节点
      children:[
        {
          path: '/myOrder',
          name: '我的工单',
          component: myOrder,
        }
      ]
    },
    {
      path: '/',
      component: home,
      name: '',
      iconCls: 'fa fa-bar-chart',
      leaf: true,//只有一个节点
      children:[
        {
          path: '/clientManage',
          name: '客户管理',
          component: clientManage,
        }
      ]
    },
    {
      path: '/',
      component: home,
      name: '',
      iconCls: 'fa fa-bar-chart',
      leaf: true,//只有一个节点
      children:[
        {
          path: '/finance',
          name: '财务管理',
          component: finance,
        }
      ]
    },
    {
      path: '/',
      component: home,
      name: '',
      iconCls: 'fa fa-bar-chart',
      leaf: true,//只有一个节点
      children:[
        {
          path: '/projectManage',
          name: '项目管理',
          component: projectManage,
        }
      ]
    }, 
    {
      path: '/',
      component: home,
      name: '',
      iconCls: 'fa fa-bar-chart',
      leaf: true,//只有一个节点
      children:[
        {
          path: '/matter',
          name: '事项管理',
          component: matter,
        }
      ]
    },
    {
      path: '/',
      component: home,
      name: '',
      iconCls: 'fa fa-bar-chart',
      leaf: true,//只有一个节点
      children:[
        {
          path: '/myReminder',
          name: '我的提醒',
          component: myReminder,
        }
      ]
    },
   
    {
      path: '/',
      component: home,
      name: '',
      iconCls: 'fa fa-bar-chart',
      leaf: true,//只有一个节点
      children:[
        {
          path: '/corporateDocuments',
          name: '企业文件',
          component: corporateDocuments,
        }
      ]
    },
    {
      path: '/',
      component: home,
      name: '',
      iconCls: 'fa fa-bar-chart',
      leaf: true,//只有一个节点
      children:[
        {
          path: '/systemSettings',
          name: '系统设定',
          component: systemSettings
        }]
    },
    {
      path: '/',
      component: home,
      name: '',
      iconCls: 'fa fa-bar-chart',
      leaf: true,//只有一个节点
      children:[
        {
          path: '/addUser',
          name: '新增',
          component: addUser,
           
        }
      ]
    }
  ]

var router = new VueRouter({
    routes
})
export default router;