import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { HOST_URL } from '../constants'
import { EyeIcon } from '@heroicons/react/24/outline'


export default function Review() {
    const [apiList, setApiList] = useState([]);

    useEffect(() => {
        const url = `${HOST_URL}submission/getAllSubmittedApiList`
        axios.get(url).then(res => {
            setApiList(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    function randomColor() {
        let colors = [
            'text-violet-600 bg-violet-200',
            'text-green-600 bg-green-200',
            'text-red-600 bg-red-200',
            'text-yellow-600 bg-yellow-200',
            'text-orange-600 bg-orange-200',
            'text-teal-600 bg-teal-200',
            'text-cyan-600 bg-cyan-200',
            'text-blue-600 bg-blue-200',
            'text-rose-600 bg-rose-200',
        ]
        let color = colors[Math.floor(Math.random() * colors.length)];
        return color;
    }

    function getInitial(name) {
        let arr = name.split(' ')
        let initial = arr[0][0] + arr[1][0]
        return initial;
    }

    return (
        <section className="bg-coolGray-50 py-4 bs-section-dragged">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center justify-between -m-2 mb-4">
                    <div className="w-full md:w-1/2 p-2">
                        <p className="font-semibold text-xl text-coolGray-800">Api List</p>
                        <p className="font-medium text-sm text-coolGray-500">Total Count 245</p>
                    </div>
                    <div className="w-full md:w-1/2 p-2">
                        <div className="relative md:max-w-max md:ml-auto">
                            <svg className="absolute left-3 transform top-1/2 -translate-y-1/2" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.0467 11.22L12.6667 9.80667C12.3699 9.5245 11.9955 9.33754 11.5916 9.26983C11.1876 9.20211 10.7727 9.25673 10.4001 9.42667L9.80008 8.82667C10.5071 7.88194 10.83 6.70445 10.7038 5.53122C10.5775 4.358 10.0115 3.27615 9.1197 2.50347C8.22787 1.73078 7.07643 1.32464 5.89718 1.36679C4.71794 1.40894 3.59844 1.89626 2.76405 2.73065C1.92967 3.56503 1.44235 4.68453 1.4002 5.86378C1.35805 7.04302 1.76419 8.19446 2.53687 9.08629C3.30956 9.97812 4.3914 10.5441 5.56463 10.6704C6.73786 10.7966 7.91535 10.4737 8.86007 9.76667L9.45341 10.36C9.26347 10.7331 9.1954 11.1564 9.25879 11.5702C9.32218 11.984 9.51383 12.3675 9.80674 12.6667L11.2201 14.08C11.5951 14.4545 12.1034 14.6649 12.6334 14.6649C13.1634 14.6649 13.6717 14.4545 14.0467 14.08C14.2372 13.8937 14.3886 13.6713 14.4919 13.4257C14.5953 13.1802 14.6485 12.9164 14.6485 12.65C14.6485 12.3836 14.5953 12.1198 14.4919 11.8743C14.3886 11.6287 14.2372 11.4063 14.0467 11.22ZM8.39341 8.39333C7.9269 8.85866 7.33294 9.1753 6.68657 9.30323C6.0402 9.43117 5.37041 9.36466 4.76181 9.11212C4.15321 8.85958 3.63312 8.43234 3.26722 7.88436C2.90132 7.33638 2.70603 6.69224 2.70603 6.03333C2.70603 5.37442 2.90132 4.73029 3.26722 4.18231C3.63312 3.63433 4.15321 3.20708 4.76181 2.95454C5.37041 2.702 6.0402 2.6355 6.68657 2.76343C7.33294 2.89137 7.9269 3.208 8.39341 3.67333C8.70383 3.98297 8.95012 4.35081 9.11816 4.75577C9.2862 5.16074 9.3727 5.59488 9.3727 6.03333C9.3727 6.47178 9.2862 6.90592 9.11816 7.31089C8.95012 7.71586 8.70383 8.08369 8.39341 8.39333ZM13.1067 13.1067C13.0448 13.1692 12.971 13.2187 12.8898 13.2526C12.8086 13.2864 12.7214 13.3039 12.6334 13.3039C12.5454 13.3039 12.4583 13.2864 12.377 13.2526C12.2958 13.2187 12.2221 13.1692 12.1601 13.1067L10.7467 11.6933C10.6843 11.6314 10.6347 11.5576 10.6008 11.4764C10.567 11.3951 10.5495 11.308 10.5495 11.22C10.5495 11.132 10.567 11.0449 10.6008 10.9636C10.6347 10.8824 10.6843 10.8086 10.7467 10.7467C10.8087 10.6842 10.8825 10.6346 10.9637 10.6007C11.0449 10.5669 11.1321 10.5495 11.2201 10.5495C11.3081 10.5495 11.3952 10.5669 11.4765 10.6007C11.5577 10.6346 11.6314 10.6842 11.6934 10.7467L13.1067 12.16C13.1692 12.222 13.2188 12.2957 13.2527 12.3769C13.2865 12.4582 13.3039 12.5453 13.3039 12.6333C13.3039 12.7213 13.2865 12.8085 13.2527 12.8897C13.2188 12.971 13.1692 13.0447 13.1067 13.1067Z" fill="#BBC3CF"></path>
                            </svg>
                            <input className="w-full md:w-64 pl-8 pr-4 py-2 text-sm text-coolGray-400 font-medium outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" type="text" placeholder="Search" />
                        </div>
                    </div>
                </div>
                <div className="mb-6 border border-coolGray-100"></div>
                <div className="overflow-hidden border border-coolGray-100 rounded-md shadow-dashboard">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <tbody>
                                <tr className="whitespace-nowrap h-11 bg-coolGray-50 bg-opacity-80 border-b border-coolGray-100">
                                    <th className="px-4 font-semibold text-xs text-coolGray-500 uppercase text-left">
                                        <div className="flex items-center">
                                            <p>User Name</p>
                                        </div>
                                    </th>
                                    <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-left">API End Point</th>
                                    <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">Version</th>
                                    <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-left">Language</th>
                                    <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">Refunds</th>
                                    <th className="whitespace-nowrap font-semibold text-xs text-coolGray-500 uppercase text-center"></th>
                                </tr>

                                {apiList.map((item, ind) => (
                                    <tr className="h-18 border-t border-coolGray-100">
                                        <td className="whitespace-nowrap px-4 bg-white text-left">
                                            <div className="flex items-center -m-2">
                                                {/* <div className="w-auto p-2">
                                                    <input className="w-4 h-4 bg-white rounded" type="checkbox" />
                                                </div> */}
                                                <div className="w-auto p-2">
                                                    <div className={`flex items-center justify-center w-10 h-10 text-base font-medium rounded-md ${randomColor()}`}>{getInitial(item.user.name)}</div>
                                                </div>
                                                <div className="w-auto p-2">
                                                    <p className="text-xs font-semibold text-coolGray-800">{item.user.name}</p>
                                                    <p className="text-xs font-medium text-coolGray-500">{item.user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">{item.apiEndPoint}</td>
                                        <td className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">{item.apiEndPoint}</td>
                                        <td className="whitespace-nowrap px-4 bg-white text-sm font-medium text-yellow-500 text-left">#432512</td>
                                        <td className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">5</td>
                                        <td className="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
                                            <EyeIcon className='ml-auto h-4 w-4 text-coolGray-400' />
                                        </td>
                                    </tr>
                                ))}



                                <tr className="h-18 border-t border-coolGray-100">
                                    <th className="whitespace-nowrap px-4 bg-white text-left">
                                        <div className="flex items-center -m-2">
                                            <div className="w-auto p-2">
                                                <input className="w-4 h-4 bg-white rounded" type="checkbox" />
                                            </div>
                                            <div className="w-auto p-2">
                                                <div className="flex items-center justify-center w-10 h-10 text-base font-medium text-violet-600 bg-violet-200 rounded-md">PS</div>
                                            </div>
                                            <div className="w-auto p-2">
                                                <p className="text-xs font-semibold text-coolGray-800">Patricia Semklo</p>
                                                <p className="text-xs font-medium text-coolGray-500">patricia.semklo@app.com</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">United States</th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">6</th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-yellow-500 text-left">#5435532</th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">12</th>
                                    <th className="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
                                        <svg className="ml-auto" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z" fill="#D5DAE1"></path>
                                        </svg>
                                    </th>
                                </tr>
                                <tr className="h-18 border-t border-coolGray-100">
                                    <th className="whitespace-nowrap px-4 bg-white text-left">
                                        <div className="flex items-center -m-2">
                                            <div className="w-auto p-2">
                                                <input className="w-4 h-4 bg-white rounded" type="checkbox" />
                                            </div>
                                            <div className="w-auto p-2">
                                                <div className="flex items-center justify-center w-10 h-10 text-base font-medium text-green-600 bg-green-200 rounded-md">PS</div>
                                            </div>
                                            <div className="w-auto p-2">
                                                <p className="text-xs font-semibold text-coolGray-800">Patricia Semklo</p>
                                                <p className="text-xs font-medium text-coolGray-500">patricia.semklo@app.com</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">Germany</th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">14</th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-yellow-500 text-left">#1242456</th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">9</th>
                                    <th className="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
                                        <svg className="ml-auto" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z" fill="#D5DAE1"></path>
                                        </svg>
                                    </th>
                                </tr>
                                <tr className="h-18 border-t border-coolGray-100">
                                    <th className="whitespace-nowrap px-4 bg-white text-left">
                                        <div className="flex items-center -m-2">
                                            <div className="w-auto p-2">
                                                <input className="w-4 h-4 bg-white rounded" type="checkbox" />
                                            </div>
                                            <div className="w-auto p-2">
                                                <div className="flex items-center justify-center w-10 h-10 text-base font-medium text-red-600 bg-red-200 rounded-md">PS</div>
                                            </div>
                                            <div className="w-auto p-2">
                                                <p className="text-xs font-semibold text-coolGray-800">Patricia Semklo</p>
                                                <p className="text-xs font-medium text-coolGray-500">patricia.semklo@app.com</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">France</th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">145</th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-yellow-500 text-left">#4321114</th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">2</th>
                                    <th className="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
                                        <svg className="ml-auto" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z" fill="#D5DAE1"></path>
                                        </svg>
                                    </th>
                                </tr>
                                <tr className="h-18 border-t border-coolGray-100">
                                    <th className="whitespace-nowrap px-4 bg-white text-left">
                                        <div className="flex items-center -m-2">
                                            <div className="w-auto p-2">
                                                <input className="w-4 h-4 bg-white rounded" type="checkbox" />
                                            </div>
                                            <div className="w-auto p-2">
                                                <div className="flex items-center justify-center w-10 h-10 text-base font-medium text-yellow-600 bg-yellow-200 rounded-md">PS</div>
                                            </div>
                                            <div className="w-auto p-2">
                                                <p className="text-xs font-semibold text-coolGray-800">Patricia Semklo</p>
                                                <p className="text-xs font-medium text-coolGray-500">patricia.semklo@app.com</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">Italy</th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">55</th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-yellow-500 text-left">#6543321</th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">4</th>
                                    <th className="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
                                        <svg className="ml-auto" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z" fill="#D5DAE1"></path>
                                        </svg>
                                    </th>
                                </tr>
                                <tr className="h-18 border-t border-coolGray-100">
                                    <th className="whitespace-nowrap px-4 bg-white text-left">
                                        <div className="flex items-center -m-2">
                                            <div className="w-auto p-2">
                                                <input className="w-4 h-4 bg-white rounded" type="checkbox" />
                                            </div>
                                            <div className="w-auto p-2">
                                                <div className="flex items-center justify-center w-10 h-10 text-base font-medium text-violet-600 bg-violet-200 rounded-md">PS</div>
                                            </div>
                                            <div className="w-auto p-2">
                                                <p className="text-xs font-semibold text-coolGray-800">Patricia Semklo</p>
                                                <p className="text-xs font-medium text-coolGray-500">patricia.semklo@app.com</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">Croatia</th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">43</th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-yellow-500 text-left">#664234</th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">12</th>
                                    <th className="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
                                        <svg className="ml-auto" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z" fill="#D5DAE1"></path>
                                        </svg>
                                    </th>
                                </tr>

                                <tr className="h-18">
                                    <th className="whitespace-nowrap px-4 bg-white text-left">
                                        <div className="flex items-center -m-2">
                                            <div className="w-auto p-2">
                                                <input className="w-4 h-4 bg-white rounded" type="checkbox" />
                                            </div>
                                            <div className="w-auto p-2">
                                                <div className="flex items-center justify-center w-10 h-10 text-base font-medium text-yellow-600 bg-yellow-200 rounded-md">PS</div>
                                            </div>
                                            <div className="w-auto p-2">
                                                <p className="text-xs font-semibold text-coolGray-800">Patricia Semklo</p>
                                                <p className="text-xs font-medium text-coolGray-500">patricia.semklo@app.com</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">Denmark</th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">6</th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-yellow-500 text-left">#904300</th>
                                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">12</th>
                                    <th className="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
                                        <svg className="ml-auto" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z" fill="#D5DAE1"></path>
                                        </svg>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}