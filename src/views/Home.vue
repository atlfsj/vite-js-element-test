<template>
    <div class="table-box">
        <div class="title">
            <h2>最简单的 CRUD Demo</h2>
        </div>

        <!-- query -->
        <div class="query-box">
            <el-input class="queryInput" v-model="queryInput" placeholder="请输入姓名搜索" />
            <el-button type="primary" @click="handleAdd">增加</el-button>
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
                    <el-button link
                      type="primary"
                      size="small"
                      @click.prevent="handleRowDel(scope.row)" style="color: #F56C6C">
                        删除
                    </el-button>
                    <el-button link type="primary" size="small">
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
const tableData = ref([
    {
        id: "1",
        name: 'Tom',
        email: '123@qq.com',
        phone: '13855669452',
        state: '在职',
        address: '广东省'
    },
    {
        id: "2",
        name: 'Tom',
        email: '123@qq.com',
        phone: '13855669452',
        state: '在职',
        address: '广东省'
    },
    {
        id: "3",
        name: 'Tom',
        email: '123@qq.com',
        phone: '13855669452',
        state: '在职',
        address: '广东省'
    },
    {
        id: "4",
        name: 'Tom',
        email: '123@qq.com',
        phone: '13855669452',
        state: '在职',
        address: '广东省'
    }
])
const dialogFormVisible = ref(false)
const tableForm = ref({})
const dialogType = ref('add')

/* 方法 */
const handleRowDel = ({id}) => {    //删除数据 - 解构赋值
    console.log(id)
    // 1.通过id获取到对应索引值
    const index = tableData.value.findIndex(item=>item.id === id)
    // 2.通过索引值删除对应条目
    tableData.value.splice(index, 1)
}
const handleSelectionChange = (val) => {
    multipleSelection.value = val
    console.log(id);
}
const handleAdd = ()=> {
    dialogFormVisible.value = true
    tableForm.value = {}
}
const dialogConfirm = ()=> {        // 添加数据
    dialogFormVisible.value = false
    // 1.拿到数据
    // 2.添加到table
    tableData.value.push({
        id: (tableData.value.length + 1).toString(),
        ...tableForm.value
    })
    console.log(tableData.value)
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