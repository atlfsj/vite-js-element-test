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
            <el-table-column fixed prop="date" label="Date" width="150" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="state" label="State" width="120" />
            <el-table-column prop="city" label="City" width="120" />
            <el-table-column prop="address" label="Address" width="600" />
            <el-table-column prop="zip" label="Zip" width="120" />
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default>
                    <el-button link type="primary" size="small" @click="handleRowClick">Detail</el-button>
                    <el-button link type="primary" size="small">Edit</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- dialog对话框 -->
        <el-dialog v-model="dialogFormVisible" title="添加信息">
            <el-form :model="tableForm">
                <el-form-item label="姓名" :label-width="80">
                    <el-input v-model="tableForm.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="邮箱" :label-width="80">
                    <el-input v-model="tableForm.emali" autocomplete="off" />
                </el-form-item>
                <el-form-item label="电话" :label-width="80">
                    <el-input v-model="tableForm.phone" autocomplete="off" />
                </el-form-item>
                <el-form-item label="状态" :label-width="80">
                    <el-input v-model="tableForm.state" autocomplete="off" />
                </el-form-item>
                <el-form-item label="地址" :label-width="80">
                    <el-input v-model="tableForm.address" autocomplete="off" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="dialogFormVisible = false">
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
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
]
const dialogFormVisible = ref(false)
const tableForm = ref({
    name: '张三',
    emali: '123@qq.com',
    phone: '13855669452',
    state: '在职',
    address: '广东省'
})

/* 方法 */
const handleRowClick = () => {
    console.log('click')
}
const handleSelectionChange = (val) => {
    multipleSelection.value = val
    console.log(val);
}
const handleAdd = ()=> {
    dialogFormVisible.value = true
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