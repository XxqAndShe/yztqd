/**
 * Created by Administrator on 2017/6/17 0017.
 */
let data = [
    {
        "link": "/modules",
        "name": "首页",
        "icon": "",

    },
    {
        "link": "/modules/dispatch-center",
        "name": "调度中心",
        "icon": "cube",
        "children": [
            {
                "link": "/modules/dispatch-center/task-manage",
                "active": true,
                "name": "任务管理",
                "icon": ""
            },
            {
                "link": "/modules/dispatch-center/time-warning",
                "name": "时效预警",
                "icon": ""
            },
            {
                "link": "/modules/dispatch-center/wait-track",
                "name": "待跟踪",
                "icon": ""
            }
        ]
    },
    {
        "link": "/modules/master-center/master-manage",
        "name": "师傅中心",
        "icon": "columns ",
        "children": [
            {
                "link": "/modules/master-center/master-manage",
                "name": "师傅管理",
                "icon": " "
            },
            {
                "link": "/modules/master-center/data-change-audit",
                "name": "资料变更审核",
                "icon": " "
            },
            {
                "link": "/modules/master-center/examine-manage",
                "name": "考核管理",
                "icon": " "
            }
        ]
    },
    {
        "link": "/modules/sale-manage/branch-abnormal",
        "name": "售后管理",
        "icon": "navicon",
        "children": [
            {
                "link": "/modules/sale-manage/branch-abnormal",
                "name": "网点异常",
                "icon": ""
            }
        ]
    },
    {
        "link": "/modules/finance-center/master-withdraw-audit",
        "name": "财务中心",
        "icon": "edit",
        "children": [
            {
                "link": "/modules/finance-center/master-withdraw-audit",
                "active": true,
                "name": "师傅提现审核",
                "icon": ""
            },
            {
                "link": "/modules/finance-center/business-stream",
                "name": "营业流水",
                "icon": ""
            },
            {
                "link": "/modules/finance-center/master-stream",
                "name": "师傅流水",
                "icon": ""
            }
        ]
    },
    {
        "link": "/modules/account-manage/basic-data",
        "name": "账号管理",
        "icon": "windows",
        "children": [
            {
                "link": "/modules/account-manage/basic-data",
                "active": true,
                "name": "基本资料",
                "icon": ""
            }, {
                "link": "/modules/account-manage/security-set",
                "name": "安全设置",
                "icon": ""
            }
        ]
    }
];
export default data;
