import React from 'react'

export default function Notification(props) {
    return (
        <section className="fixed py-3 z-50 w-full">
            <div className="container px-4 mx-auto w-6/12">

                {props.status == 'error' ? (
                    <div className="p-6 bg-red-100 border border-red-200 rounded-md">
                        <div className="flex flex-wrap justify-between -m-2">
                            <div className="flex-1 p-2">
                                <div className="flex flex-wrap -m-1">
                                    <div className="w-auto p-1">
                                        <svg className="relative top-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.4733 5.52667C10.4114 5.46419 10.3376 5.41459 10.2564 5.38075C10.1751 5.3469 10.088 5.32947 9.99999 5.32947C9.91198 5.32947 9.82485 5.3469 9.74361 5.38075C9.66237 5.41459 9.58863 5.46419 9.52666 5.52667L7.99999 7.06001L6.47333 5.52667C6.34779 5.40114 6.17753 5.33061 5.99999 5.33061C5.82246 5.33061 5.65219 5.40114 5.52666 5.52667C5.40112 5.65221 5.3306 5.82247 5.3306 6.00001C5.3306 6.17754 5.40112 6.3478 5.52666 6.47334L7.05999 8.00001L5.52666 9.52667C5.46417 9.58865 5.41458 9.66238 5.38073 9.74362C5.34689 9.82486 5.32946 9.912 5.32946 10C5.32946 10.088 5.34689 10.1752 5.38073 10.2564C5.41458 10.3376 5.46417 10.4114 5.52666 10.4733C5.58863 10.5358 5.66237 10.5854 5.74361 10.6193C5.82485 10.6531 5.91198 10.6705 5.99999 10.6705C6.088 10.6705 6.17514 10.6531 6.25638 10.6193C6.33762 10.5854 6.41135 10.5358 6.47333 10.4733L7.99999 8.94001L9.52666 10.4733C9.58863 10.5358 9.66237 10.5854 9.74361 10.6193C9.82485 10.6531 9.91198 10.6705 9.99999 10.6705C10.088 10.6705 10.1751 10.6531 10.2564 10.6193C10.3376 10.5854 10.4114 10.5358 10.4733 10.4733C10.5358 10.4114 10.5854 10.3376 10.6193 10.2564C10.6531 10.1752 10.6705 10.088 10.6705 10C10.6705 9.912 10.6531 9.82486 10.6193 9.74362C10.5854 9.66238 10.5358 9.58865 10.4733 9.52667L8.93999 8.00001L10.4733 6.47334C10.5358 6.41137 10.5854 6.33763 10.6193 6.25639C10.6531 6.17515 10.6705 6.08802 10.6705 6.00001C10.6705 5.912 10.6531 5.82486 10.6193 5.74362C10.5854 5.66238 10.5358 5.58865 10.4733 5.52667ZM12.7133 3.28667C12.0983 2.64994 11.3627 2.14206 10.5494 1.79266C9.736 1.44327 8.8612 1.25936 7.976 1.25167C7.0908 1.24398 6.21294 1.41266 5.39363 1.74786C4.57432 2.08307 3.82998 2.57809 3.20403 3.20404C2.57807 3.82999 2.08305 4.57434 1.74785 5.39365C1.41264 6.21296 1.24396 7.09082 1.25166 7.97602C1.25935 8.86121 1.44326 9.73601 1.79265 10.5494C2.14204 11.3627 2.64992 12.0984 3.28666 12.7133C3.90164 13.3501 4.63727 13.858 5.45063 14.2074C6.26399 14.5567 7.13879 14.7407 8.02398 14.7483C8.90918 14.756 9.78704 14.5874 10.6064 14.2522C11.4257 13.9169 12.17 13.4219 12.796 12.796C13.4219 12.17 13.9169 11.4257 14.2521 10.6064C14.5873 9.78706 14.756 8.90919 14.7483 8.024C14.7406 7.1388 14.5567 6.264 14.2073 5.45064C13.8579 4.63728 13.3501 3.90165 12.7133 3.28667ZM11.7733 11.7733C10.9014 12.6463 9.75368 13.1899 8.52585 13.3115C7.29802 13.4332 6.066 13.1254 5.03967 12.4405C4.01335 11.7557 3.25623 10.7361 2.89731 9.55566C2.53838 8.37518 2.59986 7.10677 3.07127 5.96653C3.54267 4.82629 4.39484 3.88477 5.48259 3.30238C6.57033 2.71999 7.82635 2.53276 9.03666 2.77259C10.247 3.01242 11.3367 3.66447 12.1202 4.61765C12.9036 5.57083 13.3324 6.76617 13.3333 8.00001C13.3357 8.70087 13.1991 9.39524 12.9313 10.0429C12.6635 10.6906 12.2699 11.2788 11.7733 11.7733Z" fill="#EF5944"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-1 p-1">
                                        <h3 className="font-medium text-sm text-red-900">Error</h3>
                                        <ul className="list-disc pl-5 mt-2">
                                            <li className="text-sm font-medium text-red-600">{props.message}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto p-2">
                                <a className='cursor-pointer' onClick={() => { props.close({ popup: false }) }}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.94004 8L13.14 3.80667C13.2656 3.68113 13.3361 3.51087 13.3361 3.33333C13.3361 3.1558 13.2656 2.98554 13.14 2.86C13.0145 2.73447 12.8442 2.66394 12.6667 2.66394C12.4892 2.66394 12.3189 2.73447 12.1934 2.86L8.00004 7.06L3.80671 2.86C3.68117 2.73447 3.51091 2.66394 3.33337 2.66394C3.15584 2.66394 2.98558 2.73447 2.86004 2.86C2.7345 2.98554 2.66398 3.1558 2.66398 3.33333C2.66398 3.51087 2.7345 3.68113 2.86004 3.80667L7.06004 8L2.86004 12.1933C2.79756 12.2553 2.74796 12.329 2.71411 12.4103C2.68027 12.4915 2.66284 12.5787 2.66284 12.6667C2.66284 12.7547 2.68027 12.8418 2.71411 12.9231C2.74796 13.0043 2.79756 13.078 2.86004 13.14C2.92202 13.2025 2.99575 13.2521 3.07699 13.2859C3.15823 13.3198 3.24537 13.3372 3.33337 13.3372C3.42138 13.3372 3.50852 13.3198 3.58976 13.2859C3.671 13.2521 3.74473 13.2025 3.80671 13.14L8.00004 8.94L12.1934 13.14C12.2554 13.2025 12.3291 13.2521 12.4103 13.2859C12.4916 13.3198 12.5787 13.3372 12.6667 13.3372C12.7547 13.3372 12.8419 13.3198 12.9231 13.2859C13.0043 13.2521 13.0781 13.2025 13.14 13.14C13.2025 13.078 13.2521 13.0043 13.286 12.9231C13.3198 12.8418 13.3372 12.7547 13.3372 12.6667C13.3372 12.5787 13.3198 12.4915 13.286 12.4103C13.2521 12.329 13.2025 12.2553 13.14 12.1933L8.94004 8Z" fill="#752C21"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="p-6 bg-green-100 border border-green-200 rounded-md">
                        <div className="flex flex-wrap justify-between items-center -m-2">
                            <div className="flex-1 p-2">
                                <div className="flex flex-wrap -m-1">
                                    <div className="w-auto p-1">
                                        <svg className="relative top-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.4732 4.80667C12.4112 4.74418 12.3375 4.69458 12.2563 4.66074C12.175 4.62689 12.0879 4.60947 11.9999 4.60947C11.9119 4.60947 11.8247 4.62689 11.7435 4.66074C11.6623 4.69458 11.5885 4.74418 11.5266 4.80667L6.55989 9.78L4.47322 7.68667C4.40887 7.62451 4.33291 7.57563 4.24967 7.54283C4.16644 7.51003 4.07755 7.49394 3.9881 7.49549C3.89865 7.49703 3.81037 7.51619 3.72832 7.55185C3.64627 7.58751 3.57204 7.63898 3.50989 7.70333C3.44773 7.76768 3.39885 7.84364 3.36605 7.92688C3.33324 8.01011 3.31716 8.099 3.31871 8.18845C3.32025 8.2779 3.3394 8.36618 3.37507 8.44823C3.41073 8.53028 3.4622 8.60451 3.52655 8.66667L6.08655 11.2267C6.14853 11.2892 6.22226 11.3387 6.3035 11.3726C6.38474 11.4064 6.47188 11.4239 6.55989 11.4239C6.64789 11.4239 6.73503 11.4064 6.81627 11.3726C6.89751 11.3387 6.97124 11.2892 7.03322 11.2267L12.4732 5.78667C12.5409 5.72424 12.5949 5.64847 12.6318 5.56414C12.6688 5.4798 12.6878 5.38873 12.6878 5.29667C12.6878 5.2046 12.6688 5.11353 12.6318 5.02919C12.5949 4.94486 12.5409 4.86909 12.4732 4.80667Z" fill="#2AD168"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-1 p-1">
                                        <h3 className="font-medium text-sm text-green-900">Success!&nbsp; {props.message}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto p-2">
                                <a className='cursor-pointer' onClick={() => { props.close({ popup: false }) }}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.94004 8L13.14 3.80667C13.2656 3.68113 13.3361 3.51087 13.3361 3.33333C13.3361 3.1558 13.2656 2.98554 13.14 2.86C13.0145 2.73447 12.8442 2.66394 12.6667 2.66394C12.4892 2.66394 12.3189 2.73447 12.1934 2.86L8.00004 7.06L3.80671 2.86C3.68117 2.73447 3.51091 2.66394 3.33337 2.66394C3.15584 2.66394 2.98558 2.73447 2.86004 2.86C2.7345 2.98554 2.66398 3.1558 2.66398 3.33333C2.66398 3.51087 2.7345 3.68113 2.86004 3.80667L7.06004 8L2.86004 12.1933C2.79756 12.2553 2.74796 12.329 2.71411 12.4103C2.68027 12.4915 2.66284 12.5787 2.66284 12.6667C2.66284 12.7547 2.68027 12.8418 2.71411 12.9231C2.74796 13.0043 2.79756 13.078 2.86004 13.14C2.92202 13.2025 2.99575 13.2521 3.07699 13.2859C3.15823 13.3198 3.24537 13.3372 3.33337 13.3372C3.42138 13.3372 3.50852 13.3198 3.58976 13.2859C3.671 13.2521 3.74473 13.2025 3.80671 13.14L8.00004 8.94L12.1934 13.14C12.2554 13.2025 12.3291 13.2521 12.4103 13.2859C12.4916 13.3198 12.5787 13.3372 12.6667 13.3372C12.7547 13.3372 12.8419 13.3198 12.9231 13.2859C13.0043 13.2521 13.0781 13.2025 13.14 13.14C13.2025 13.078 13.2521 13.0043 13.286 12.9231C13.3198 12.8418 13.3372 12.7547 13.3372 12.6667C13.3372 12.5787 13.3198 12.4915 13.286 12.4103C13.2521 12.329 13.2025 12.2553 13.14 12.1933L8.94004 8Z" fill="#156633"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    )
}
