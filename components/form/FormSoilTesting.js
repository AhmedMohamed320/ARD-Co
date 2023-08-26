import React from "react";
import classes from "./style.module.css"
const FormSoilTesting = () => {
    return (
        <form className={classes.from}>
            <div>
                <label htmlFor="">النيتروجين</label>
                <input
                    type="number"
                    placeholder="ادخل نسبه النيتروجين"
                    required
                />
            </div>
            <div>
                <label htmlFor="">البوتاسيوم</label>
                <input
                    type="number"
                    placeholder="ادخل نسبه البوتاسيوم"
                    required
                />
            </div>
            <div>
                <label htmlFor="">الفوسفات</label>
                <input
                    type="number"
                    placeholder="ادخل نسبه الفوسفات"
                    required
                />
            </div>
            <div>
                <label htmlFor="">الحامضية والقلوية</label>
                <input
                    type="number"
                    placeholder="ادخل نسبه الحامضية والقلوية
                    "
                    required
                />
            </div>
            <div>
                <label htmlFor="">الملوحة</label>
                <input type="number" placeholder="ادخل نسبه الملوحة" required />
            </div>
            <div>
                <label htmlFor="">المحتوي العضوي</label>
                <input
                    type="number"
                    placeholder="ادخل نسبه المحتوي العضوي
                    "
                    required
                />
            </div>
        </form>
    );
};

export default FormSoilTesting;
