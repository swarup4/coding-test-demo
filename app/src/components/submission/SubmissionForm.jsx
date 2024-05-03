import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { HOST_URL } from '../../constants'
// import Notification from '../components/common/Notification'

const initialValues = {
    name: '',
    category: '',
    apiEndPoint: '',
    version: '',
    apiVersion: '',
    documentationLink: '',
    programmingLanguage: '',
    requirementApproach: '',
    description: '',
}
const schema = object({
    name: string().required('Enter your API Name'),
    category: string().required('Enter your Project Category'),
    apiEndPoint: string().required('Enter API End point'),
    version: string().required('Enter your API Version'),
    apiVersion: string().required('Enter your API End Point Version'),
    documentationLink: string().required('Enter your API Documentation Link'),
    programmingLanguage: string().required('Select your Programming Language'),
    requirementApproach: string().required('Enter your API requirment approach'),
    description: string().required('Enter your API description'),
})

export default function SubmissionForm() {

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, action) => {
            debugger;
            alert("Hello")
            console.log(values)
            // signup(values);
        }
    })

    // function signup(data) {
    //     const url = `${HOST_URL}user/signup`
    //     axios.post(url, data).then(res => {
    //         if (res.data.status == 409) {
    //             setNotification({
    //                 popup: true,
    //                 status: 'error',
    //                 message: res.data.message
    //             })
    //         } else {
    //             console.log(res.data);
    //             sessionStorage.auth = res.data.token;
    //             const location = sessionStorage.url;
    //             navigate(location);
    //         }
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="pb-6 border-b border-coolGray-100">
                    <div className="flex flex-wrap items-center justify-between -m-2">
                        <div className="w-full md:w-auto p-2">
                            <h2 className="text-coolGray-900 text-lg font-semibold">Code Submission</h2>
                            <p className="text-xs text-coolGray-500 font-medium">Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="w-full md:w-auto p-2">
                            <div className="flex flex-wrap justify-between -m-1.5">
                                <div className="w-full md:w-auto p-1.5">
                                    <button type="reset" className="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button">
                                        <p>Cancel</p>
                                    </button>
                                </div>
                                <div className="w-full md:w-auto p-1.5">
                                    <button type="submit" className="flex flex-wrap justify-center w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 font-medium text-sm text-white border border-yellow-500 rounded-md shadow-button">
                                        <p>Save</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">Name</p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <input type="text" name='name' placeholder="API Name" value={values.name} onChange={handleChange} onBlur={handleBlur}
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                {errors.name && touched.name ? (
                                    <p className='mt-1 text-red-500'>{errors.name}</p>
                                ) : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">Category</p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <input type="text" name='category' placeholder="Project Category" value={values.category} onChange={handleChange} onBlur={handleBlur}
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                {errors.category && touched.category ? (
                                    <p className='mt-1 text-red-500'>{errors.category}</p>
                                ) : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">API End Point</p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <input type="text" name='apiEndPoint' placeholder="API Endpoint" value={values.apiEndPoint} onChange={handleChange} onBlur={handleBlur}
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                {errors.apiEndPoint && touched.apiEndPoint ? (
                                    <p className='mt-1 text-red-500'>{errors.apiEndPoint}</p>
                                ) : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">API Version</p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <input type="text" name='apiVersion' placeholder="API End Point Version" value={values.apiVersion} onChange={handleChange} onBlur={handleBlur}
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                {errors.apiVersion && touched.apiVersion ? (
                                    <p className='mt-1 text-red-500'>{errors.apiVersion}</p>
                                ) : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">Version</p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <input type="text" name='version' placeholder="API Version" value={values.version} onChange={handleChange} onBlur={handleBlur}
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                {errors.version && touched.version ? (
                                    <p className='mt-1 text-red-500'>{errors.version}</p>
                                ) : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">Documentation Link</p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <input type="text" name='documentationLink' placeholder="Documentation Link" value={values.documentationLink} onChange={handleChange} onBlur={handleBlur}
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                {errors.documentationLink && touched.documentationLink ? (
                                    <p className='mt-1 text-red-500'>{errors.documentationLink}</p>
                                ) : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">Programming Language</p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <select name='programmingLanguage' value={values.programmingLanguage} onChange={handleChange} onBlur={handleBlur}
                                    className="appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 focus:border-yellow-500 rounded-lg shadow-input">
                                    <option value="">Select</option>
                                    <option value="nodejs">Node JS</option>
                                    <option value="python">Python</option>
                                </select>
                                {errors.programmingLanguage && touched.programmingLanguage ? (
                                    <p className='mt-1 text-red-500'>{errors.programmingLanguage}</p>
                                ) : ''}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">Description</p>
                                <p className="text-xs text-coolGray-500 font-medium">Integration API code needs to be write</p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <textarea name='description' value={values.description} onChange={handleChange} onBlur={handleBlur}
                                    className="block w-full h-32 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input resize-none" defaultValue={""} />
                                {errors.description && touched.description ? (
                                    <p className='mt-1 text-red-500'>{errors.description}</p>
                                ) : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}