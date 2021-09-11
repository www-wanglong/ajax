import React from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

// 自定义表单控件
function MyInput ({label, ...props }) {
  const [field, meta] = useField(props)
  return (
    <div>
      <label htmlFor={props.id}>{label}</label>
      <input {...field} {...props}/>
      { meta.touched && meta.error ? <span>{meta.error}</span> : null }
    </div>
  )
}

// 自定义复选框
function Checkbox ({label, ...props}) {
  const [filed, meta, helper] = useField(props)
  const { value } = meta
  const { setValue } = helper
  const handleChange = () => {
    const set = new Set(value)
    if (set.has(props.value)) {
      set.delete(props.value)
    } else {
      set.add(props.value)
    }
    setValue([...set])
  }
  return (
    <div>
      <label>
        <input checked={value.includes(props.value)} type="checkbox" {...props} onChange={handleChange} />{label}
      </label>
    </div>
  )
}

// 组件构建表单
function App() {

  const initialValues = {
    username: '',
    content: 'content',
    subject: 'Java',
    hobbies: ['足球']
  };

  const handleSubmit = (values) => {
    console.log(values)
  }

  const schema = Yup.object({
    username: Yup.string()
      .max(15, '用户名必须大于15')
      .required('必填'),
    password: Yup.string()
      .min(6, '密码的长度不能小于6')
      .required('请输入密码')
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <Field name="username" />
        <ErrorMessage name="username" />
        <MyInput
          id="myPassword"
          label="密码"
          name="password"
          type="password"
          placeholder="请输入密码"
        />
        <Checkbox
          value="足球"
          label="足球"
          name="hobbies"
        />
        <Checkbox
          value="篮球"
          label="篮球"
          name="hobbies"
        />
        <Checkbox
          value="橄榄球"
          label="橄榄球"
          name="hobbies"
        />
        <Field name="content" as="textarea" />
        <Field as="select" name="subject">
          <option value="前端">前端</option>
          <option value="Java">Java</option>
        </Field>
        <input type="submit" />
      </Form>
    </Formik>
  );
}



export default App;
