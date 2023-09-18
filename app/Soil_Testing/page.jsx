import React from "react";
import classes from "./page.module.css";
const page = () => {
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
                        />
                    </div>
                    <div>
                        <label htmlFor="n2">المحصول الاخير</label>
                        <input
                            type="text"
                            placeholder=" نوع محصول     "
                            id="n2"
                        />
                    </div>
                    <div>
                        <label htmlFor="n3">المحصول القادم</label>
                        <input
                            type="text"
                            placeholder="نوع المحصول 
                                "
                            id="n3"
                        />
                    </div>
                </div>
                <div className={classes.part2}>
                    <div>
                        <p>القراءة الأولي للربع الأول </p>
                        <div className={classes.data}>
                            <div>
                                <label htmlFor="">نيتروجين </label>
                                <input type="number" placeholder="القراه" />
                            </div>
                            <div>
                                <label htmlFor="">بوتاسيوم</label>
                                <input type="number" placeholder="القراه" />
                            </div>
                            <div>
                                <label htmlFor="">فوسفات</label>
                                <input type="number" placeholder="القراه" />
                            </div>
                            <div>
                                <label htmlFor="">الحامضية والقلوية</label>
                                <input type="number" placeholder="القراه" />
                            </div>
                            <div>
                                <label htmlFor="">الملوحة </label>
                                <input type="number" placeholder="القراه" />
                            </div>
                            <div>
                                <label htmlFor="">المحتوي العضوي</label>
                                <input type="number" placeholder="القراه" />
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <label htmlFor="n4">القراءة الثانيه للربع الأول </label>
                        <input
                            type="number"
                            placeholder=" أدخل القراءة الثانيه للربع الأول من الأرض  "
                            id="n4"
                        />
                    </div>
                    <div>
                        <label htmlFor="n4">القراءة الأولي للربع الثاني </label>
                        <input
                            type="number"
                            placeholder=" أدخل القراءة الأولي للربع الثاني من الأرض  "
                            id="n4"
                        />
                    </div>
                    <div>
                        <label htmlFor="n4">القراءة الثانيه للربع الثاني </label>
                        <input
                            type="number"
                            placeholder=" أدخل القراءة الثانيه للربع الثاني من الأرض  "
                            id="n4"
                        />
                    </div>
                    <div>
                        <label htmlFor="n4">القراءة الأولي للربع الثالث </label>
                        <input
                            type="number"
                            placeholder=" أدخل القراءة الأولي للربع الثالث من الأرض  "
                            id="n4"
                        />
                    </div>
                    <div>
                        <label htmlFor="n4">القراءة الثانيه للربع الثالث </label>
                        <input
                            type="number"
                            placeholder=" أدخل القراءة الثانيه للربع الثالث من الأرض  "
                            id="n4"
                        />
                    </div>
                    <div>
                        <label htmlFor="n4">القراءة الأولي للربع الرابع </label>
                        <input
                            type="number"
                            placeholder=" أدخل القراءة الأولي للربع الرابع من الأرض  "
                            id="n4"
                        />
                    </div>
                    <div>
                        <label htmlFor="n4">القراءة الثانيه للربع الرابع </label>
                        <input
                            type="number"
                            placeholder=" أدخل القراءة الثانيه للربع الرابع من الأرض  "
                            id="n4"
                        />
                    </div> */}
                </div>
                <button>تاكيد</button>
            </div>
        </section>
    );
};

export default page;
