<template>
    <div class="table-box">
        <div class="title">
            <h2>最简单的 CRUD Demo</h2>
        </div>

        <!-- query -->
        <div class="query-box">
            <el-input class="queryInput" v-model="queryInput" placeholder="请输入姓名搜索" />
            <div class="btnList">
                <el-button type="primary" @click="handleAdd">增加</el-button>
                <el-button type="danger" @click="handleDelList" v-if = "multipleSelection.length > 0">删除多选</el-button>
            </div>
        </div>
        <!-- table -->      <!-- el-table可用border加边框-->
        <el-table border ref="multipleTableRef" :data="tableData" style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" />
            <el-table-column prop="name" label="姓名" width="120" />
            <el-table-column prop="email" label="邮箱" width="150" />
            <el-table-column prop="state" label="状态" width="120" />
            <el-table-column prop="phone" label="电话" width="120" />
            <el-table-column prop="address" label="住址" width="300" />
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="handleRowDel(scope.row)" style="color: #F56C6C">
                        删除
                    </el-button>
                    <el-button link type="primary" size="small" @click="handleEdit(scope.row)" >
                        编辑
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- dialog对话框 -->
        <el-dialog v-model="dialogFormVisible" :title="dialogType === 'add' ? '新增' : '编辑'">
            <el-form :model="tableForm">
                <el-form-item label="姓名" :label-width="60">
                    <el-input v-model="tableForm.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="邮箱" :label-width="60">
                    <el-input v-model="tableForm.email" autocomplete="off" />
                </el-form-item>
                <el-form-item label="电话" :label-width="60">
                    <el-input v-model="tableForm.phone" autocomplete="off" />
                </el-form-item>
                <el-form-item label="状态" :label-width="60">
                    <el-input v-model="tableForm.state" autocomplete="off" />
                </el-form-item>
                <el-form-item label="地址" :label-width="60">
                    <el-input v-model="tableForm.address" autocomplete="off" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="dialogConfirm">
                        确认
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'

/* 数据 */
const queryInput = ref("")
const multipleSelection = ref([])
let tableData = ref([
    {
        id: "1",
        name: 'Tom1',
        email: '123@qq.com',
        phone: '13855669452',
        state: '在职',
        address: '广东省'
    },
    {
        id: "2",
        name: 'Tom2',
        email: '123@qq.com',
        phone: '13855669452',
        state: '在职',
        address: '广东省'
    },
    {
        id: "3",
        name: 'Tom3',
        email: '123@qq.com',
        phone: '13855669452',
        state: '在职',
        address: '广东省'
    },
    {
        id: "4",
        name: 'Tom4',
        email: '123@qq.com',
        phone: '13855669452',
        state: '在职',
        address: '广东省'
    }
])
const dialogFormVisible = ref(false)
let tableForm = ref({})
let dialogType = ref('add')

/* 方法 */

//删除一行数据 
const handleRowDel = ({id}) => {     // 解构赋值
    /* console.log(id)*/
    // 1.通过id获取到对应索引值
    let index = tableData.value.findIndex(item=>item.id === id)
    // 2.通过索引值删除对应条目
    tableData.value.splice(index, 1)
}

// add弹窗
const handleAdd = ()=> {  
    dialogType = 'add'           
    dialogFormVisible.value = true
    tableForm.value = {}
}

// 多选
const handleSelectionChange = (val) => {    
    // multipleSelection.value = val
    // console.log(val);

    multipleSelection.value = []
    val.forEach(item => {
        multipleSelection.value.push(item.id)
    })
    /* console.log(multipleSelection.value)*/
}

// 删除多选
const handleDelList = ()=> {        
    multipleSelection.value.forEach(id => {
        handleRowDel({id})
    })
    multipleSelection.value = []
}

// edit弹窗
const handleEdit = (row)=> {
    dialogFormVisible.value = true
    dialogType = 'edit'
    /* console.log(row)*/
    tableForm.value = {...row}
}

// 确认
const dialogConfirm = ()=> {  
    dialogFormVisible.value = false

    // 判断新增还是编辑
    if (dialogType === 'add') {
        // 1.拿到数据
        // 2.添加到table
        tableData.value.push({
            id: (tableData.value.length + 1).toString(),
            ...tableForm.value
        })
        /* console.log(tableData.value)*/
    } else {
        // 1.获取到当前的索引
        let index = tableData.value.findIndex(item=>item.id === tableForm.value.id)
        /* console.log(index)*/
    
        // 2.替换当前索引值对应的数据
        tableData.value[index] = tableForm.value
    }

    
}

</script>

<style>
.table-box {
    width: 800px;
    margin: 200px auto;
}

.title {
    text-align: center;
}

.query-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
}

.queryInput {
    width: 200px;
}
</style>