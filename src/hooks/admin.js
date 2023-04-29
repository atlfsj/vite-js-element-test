import { ElMessage } from "element-plus";
import AdminSearvice from "../services/admin"
import { useRouter } from "vue-router";

function Admin_Manage(){

    const router = useRouter();

    // 执行本函数返回对应的Admin相关操作
    function Admin_Login(uesr,pwd){
        AdminSearvice.admin_login(user,pwd).then((data)=>{
            if(data.data.code == 200){
                // 登录成功
                ElMessage.success("登录成功");

                // 跳转到首页
                router.push("/home")
            }else{
                //data.msg 提示错误相关信息
                ElMessage.warning(data.msg);
            }           
        }).catch(err=>{
            // err: 写入日志文件
            console.log(err);
            ElMessage.error("请求出错，请联系管理员")
        });

    }

    function Add_Admin(){

    }

    function AdminListByPage(){

    }

    function AdminCountBySearchName(){

    }
}

return {
    Admin_Login,
    Add_Admin,
    AdminListByPage,
    AdminCountBySearchName
}
export default { Admin_Manage }