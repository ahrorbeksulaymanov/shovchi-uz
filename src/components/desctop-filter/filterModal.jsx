import React from "react";
import { Input, Modal, Select } from 'antd';

const FilterModal = ({isModalOpen, searchBtn}) => {

    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      
      const onSearch = (value) => {
        console.log('search:', value);
      };

    return (
        <Modal style={{ top: 20 }} title="Filterlash" okText={'Filterlash'} cancelText='Bekor qilish' visible={isModalOpen} onOk={searchBtn} onCancel={searchBtn}>
            <label className="block mb-3" htmlFor="">Yosh oralig'ini kiriting</label>
                <div className="w-[45%] inline-block mr-[8%]">
                    <Input className="rounded-md" type="number" placeholder="dan" />
                </div>
                <div className="w-[45%] inline-block">
                    <Input className="rounded-md" type="number" placeholder="gacha" />
                </div>
                <label className="block mb-3 mt-5" htmlFor="">Millati</label>
                <div className="w-[100%] inline-block mr-[8%]">
                    <Select
                        showSearch
                        allowClear
                        className="w-[100%]"
                        placeholder="Millatni tanlang"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: "o'zbek",
                                label: "O'zbek",
                            },
                            {
                                value: 'qozoq',
                                label: 'Qozoq',
                            },
                            {
                                value: 'rus',
                                label: 'Rus',
                            },
                        ]}
                    />
                </div>
                <label className="block mb-3 mt-5" htmlFor="">Oilaviy holati</label>
                <div className="w-[100%] inline-block mr-[8%]">
                    <Select
                        showSearch
                        allowClear
                        className="w-[100%]"
                        placeholder="Oilaviy holatini tanlang"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'Turmush qurmagan',
                                label: 'Turmush qurmagan',
                            },
                            {
                                value: 'ajrashgan',
                                label: 'Ajrashgan',
                            },
                        ]}
                    />
                </div>
                <label className="block mb-3 mt-5" htmlFor="">Qaysi viloyatdan</label>
                <div className="w-[100%] inline-block mr-[8%]">
                    <Select
                        showSearch
                        allowClear
                        className="w-[100%]"
                        placeholder="Viloyatni tanlang"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'Turmush qurmagan',
                                label: 'Turmush qurmagan',
                            },
                            {
                                value: 'ajrashgan',
                                label: 'Ajrashgan',
                            },
                        ]}
                    />
                </div>
                <label className="block mb-3 mt-5" htmlFor="">Qaysi tumandan</label>
                <div className="w-[100%] inline-block mr-[8%]">
                    <Select
                        showSearch
                        allowClear
                        className="w-[100%]"
                        placeholder="Tumanni tanlang"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'Turmush qurmagan',
                                label: 'Turmush qurmagan',
                            },
                            {
                                value: 'ajrashgan',
                                label: 'Ajrashgan',
                            },
                        ]}
                    />
                </div>
                <label className="block mb-3 mt-5" htmlFor="">Germaniyadagi status</label>
                <div className="w-[100%] inline-block mr-[8%]">
                    <Select
                        showSearch
                        allowClear
                        className="w-[100%]"
                        placeholder="Tumanni tanlang"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'Ko’k karta',
                                label: 'Ko’k karta',
                            },
                            {
                                value: 'fuqarolik',
                                label: 'Fuqarolik',
                            },
                            {
                                value: 'student',
                                label: 'Student',
                            },
                            {
                                value: 'Ishchi visa',
                                label: 'Ishchi visa',
                            },
                            {
                                value: 'norasmiy',
                                label: 'Norasmiy',
                            },
                        ]}
                    />
                </div>
            
        </Modal>
    )
}
export default FilterModal