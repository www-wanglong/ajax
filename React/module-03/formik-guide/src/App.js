import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function App() {

  const formik = useFormik({
    // 默认数据
    initialValues: { username: '', password: ''},
    // 表单提交函数
    onSubmit: values => {
      console.log(values);
    },
    // 验证规则 Yup
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, '用户名长度不能大于15')
        .required('请输入用户名'),
      password: Yup.string()
        .min(6, '密码不能小于6')
        .required('请输入密码'),
    })
    // 验证规则 validate
    // validate: values => {
    //   const errors = {};
    //   if (!values.username) {
    //     errors.username = '请输入用户名';
    //   } else if (values.username.length > 15) {
    //     errors.username = '用户名长度不能大于15';
    //   }

    //   if (values.password.length < 6) {
    //     errors.password = '密码不能小于6';
    //   }
    //   return errors;
    // },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        typ="text"
        name="username"
        {...formik.getFieldProps('username')}
      />
      <p>{formik.touched.username && formik.errors.username ? formik.errors.username : null}</p>
      <input
        type="password"
        name="password"
        {...formik.getFieldProps('password')}
      />
      <p>{formik.touched.password && formik.errors.password ? formik.errors.password : null}</p>
      <input type="submit" />
    </form>
  );
}

export default App;
