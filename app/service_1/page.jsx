import React from "react";
import classes from "./page.module.css";
import FormSoilTesting from "@/components/form/FormSoilTesting";

const page = () => {
    return (
        <section className={classes.section}>
            <div>
                <p>
                    من فضلك أدخل البيانات الأتية عبر مندوبنا ومراعاة فتح خاصية
                    الموقع للتمكن من تحديد بيانات أرضك:
                </p>
                <form>
                    <div>
                        <label htmlFor="">
                            نوع أخر محصول تم زراعته أو يتم زراعته حاليا
                        </label>
                        <input type="text" placeholder="ادخل اسم المحصول" />
                    </div>
                    <div>
                        <label htmlFor="">
                            نوع المحصول المراد زراعته في الموسم الزراعي القادم
                        </label>
                        <input type="text" placeholder="ادخل اسم المحصول" />
                    </div>
                </form>
                <FormSoilTesting />
            </div>
        </section>
    );
};

export default page;
