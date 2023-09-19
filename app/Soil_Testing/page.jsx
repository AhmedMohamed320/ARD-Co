"use client";
import React, { useState } from "react";
import classes from "./page.module.css";
const page = () => {
    const [data, setData] = useState({
        Land_area: "",
        Current_crop: "",
        Next_crop: "",
        // ----------
        Nitrogen_q1_1: "",
        potassium_q1_1: "",
        phosphate_q1_1: "",
        ph_q1_1: "",
        Salinity_q1_1: "",
        Organic_q1_1: "",
        // ----------
        Nitrogen_q1_2: "",
        potassium_q1_2: "",
        phosphate_q1_2: "",
        ph_q1_2: "",
        Salinity_q1_2: "",
        Organic_q1_2: "",
         // -------------------------------------
         Nitrogen_q2_1: "",
         potassium_q2_1: "",
         phosphate_q2_1: "",
         ph_q2_1: "",
         Salinity_q2_1: "",
         Organic_q2_1: "",
         // ----------
        Nitrogen_q2_2: "",
        potassium_q2_2: "",
        phosphate_q2_2: "",
        ph_q2_2: "",
        Salinity_q2_2: "",
        Organic_q2_2: "",
         // ---------------------------------------
         Nitrogen_q3_1: "",
         potassium_q3_1: "",
         phosphate_q3_1: "",
         ph_q3_1: "",
         Salinity_q3_1: "",
         Organic_q3_1: "",
         // ----------
        Nitrogen_q3_2: "",
        potassium_q3_2: "",
        phosphate_q3_2: "",
        ph_q3_2: "",
        Salinity_q3_2: "",
        Organic_q3_2: "",
         // ------------------------------
         Nitrogen_q4_1: "",
         potassium_q4_1: "",
         phosphate_q4_1: "",
         ph_q4_1: "",
         Salinity_q4_1: "",
         Organic_q4_1: "",
         // ----------
        Nitrogen_q4_2: "",
        potassium_q4_2: "",
        phosphate_q4_2: "",
        ph_q4_2: "",
        Salinity_q4_2: "",
        Organic_q4_2: "",
    });

    function handleData(event) {
        const { name, value } = event.target;
        setData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    return (
        <section className={`mainContainer ${classes.section}`}>
            <p className={classes.title}>من فضلك أدخل البيانات الأتية :</p>
            <div>
                <div className={classes.part1}>
                    <div>
                        <label htmlFor="n1">مساحه الارض</label>
                        <input
                            type="number"
                            placeholder="ادخل مساحه الارض بالمتر"
                            id="n1"
                            value={data.Land_area}
                            name="Land_area"
                            onChange={handleData}
                        />
                    </div>
                    <div>
                        <label htmlFor="n2">المحصول الاخير</label>
                        <input
                            type="text"
                            placeholder=" نوع محصول     "
                            id="n2"
                            value={data.Current_crop}
                            name="Current_crop"
                            onChange={handleData}
                        />
                    </div>
                    <div>
                        <label htmlFor="n3">المحصول القادم</label>
                        <input
                            type="text"
                            placeholder="نوع المحصول 
                                "
                            id="n3"
                            value={data.Next_crop}
                            name="Next_crop"
                            onChange={handleData}
                        />
                    </div>
                </div>
                <div className={classes.part2}>
                    <div>
                        <p>القراءة الأولي للربع الأول </p>
                        <div className={classes.data}>
                            <div>
                                <label htmlFor="">نيتروجين </label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Nitrogen_q1_1}
                                    name="Nitrogen_q1_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">بوتاسيوم</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.potassium_q1_1}
                                    name="potassium_q1_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">فوسفات</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.phosphate_q1_1}
                                    name="phosphate_q1_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">الحامضية والقلوية</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.ph_q1_1}
                                    name="ph_q1_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">الملوحة </label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Salinity_q1_1}
                                    name="Salinity_q1_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">المحتوي العضوي</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Organic_q1_1}
                                    name="Organic_q1_1"
                                    onChange={handleData}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>القراءة الثانيه للربع الأول </p>
                        <div className={classes.data}>
                            <div>
                                <label htmlFor="">نيتروجين </label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Nitrogen_q1_2}
                                    name="Nitrogen_q1_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">بوتاسيوم</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.potassium_q1_2}
                                    name="potassium_q1_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">فوسفات</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.phosphate_q1_2}
                                    name="phosphate_q1_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">الحامضية والقلوية</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.ph_q1_2}
                                    name="ph_q1_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">الملوحة </label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Salinity_q1_2}
                                    name="Salinity_q1_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">المحتوي العضوي</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Organic_q1_2}
                                    name="Organic_q1_2"
                                    onChange={handleData}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>القراءة الأولي للربع الثاني </p>
                        <div className={classes.data}>
                            <div>
                                <label htmlFor="">نيتروجين </label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Nitrogen_q2_1}
                                    name="Nitrogen_q2_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">بوتاسيوم</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.potassium_q2_1}
                                    name="potassium_q2_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">فوسفات</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.phosphate_q2_1}
                                    name="phosphate_q2_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">الحامضية والقلوية</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.ph_q2_1}
                                    name="ph_q2_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">الملوحة </label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Salinity_q2_1}
                                    name="Salinity_q2_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">المحتوي العضوي</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Organic_q2_1}
                                    name="Organic_q2_1"
                                    onChange={handleData}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>القراءة الثانيه للربع الثاني </p>
                        <div className={classes.data}>
                            <div>
                                <label htmlFor="">نيتروجين </label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Nitrogen_q2_2}
                                    name="Nitrogen_q2_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">بوتاسيوم</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.potassium_q2_2}
                                    name="potassium_q2_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">فوسفات</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.phosphate_q2_2}
                                    name="phosphate_q2_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">الحامضية والقلوية</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.ph_q2_2}
                                    name="ph_q2_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">الملوحة </label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Salinity_q2_2}
                                    name="Salinity_q2_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">المحتوي العضوي</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Organic_q2_2}
                                    name="Organic_q2_2"
                                    onChange={handleData}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>القراءة الأولي للربع الثالث </p>
                        <div className={classes.data}>
                            <div>
                                <label htmlFor="">نيتروجين </label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Nitrogen_q3_1}
                                    name="Nitrogen_q3_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">بوتاسيوم</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.potassium_q3_1}
                                    name="potassium_q3_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">فوسفات</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.phosphate_q3_1}
                                    name="phosphate_q3_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">الحامضية والقلوية</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.ph_q3_1}
                                    name="ph_q3_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">الملوحة </label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Salinity_q3_1}
                                    name="Salinity_q3_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">المحتوي العضوي</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Organic_q3_1}
                                    name="Organic_q3_1"
                                    onChange={handleData}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>القراءة الثانيه للربع الثالث </p>
                        <div className={classes.data}>
                            <div>
                                <label htmlFor="">نيتروجين </label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Nitrogen_q3_2}
                                    name="Nitrogen_q3_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">بوتاسيوم</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.potassium_q3_2}
                                    name="potassium_q3_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">فوسفات</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.phosphate_q3_2}
                                    name="phosphate_q3_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">الحامضية والقلوية</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.ph_q3_2}
                                    name="ph_q3_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">الملوحة </label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Salinity_q3_2}
                                    name="Salinity_q3_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">المحتوي العضوي</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Organic_q3_2}
                                    name="Organic_q3_2"
                                    onChange={handleData}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>القراءة الأولي للربع الرابع </p>
                        <div className={classes.data}>
                            <div>
                                <label htmlFor="">نيتروجين </label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Nitrogen_q4_1}
                                    name="Nitrogen_q4_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">بوتاسيوم</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.potassium_q4_1}
                                    name="potassium_q4_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">فوسفات</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.phosphate_q4_1}
                                    name="phosphate_q4_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">الحامضية والقلوية</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.ph_q4_1}
                                    name="ph_q4_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">الملوحة </label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Salinity_q4_1}
                                    name="Salinity_q4_1"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">المحتوي العضوي</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Organic_q4_1}
                                    name="Organic_q4_1"
                                    onChange={handleData}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>القراءة الثانيه للربع الرابع </p>
                        <div className={classes.data}>
                            <div>
                                <label htmlFor="">نيتروجين </label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Nitrogen_q4_2}
                                    name="Nitrogen_q4_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">بوتاسيوم</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.potassium_q4_2}
                                    name="potassium_q4_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">فوسفات</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.phosphate_q4_2}
                                    name="phosphate_q4_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">الحامضية والقلوية</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.ph_q4_2}
                                    name="ph_q4_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">الملوحة </label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Salinity_q4_2}
                                    name="Salinity_q4_2"
                                    onChange={handleData}
                                />
                            </div>
                            <div>
                                <label htmlFor="">المحتوي العضوي</label>
                                <input
                                    type="number"
                                    placeholder="القراه"
                                    value={data.Organic_q4_2}
                                    name="Organic_q4_2"
                                    onChange={handleData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button>تاكيد</button>
            </div>
        </section>
    );
};

export default page;
