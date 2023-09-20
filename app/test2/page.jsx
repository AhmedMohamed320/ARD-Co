import React from "react";
import classes from "../Display_your_agricultural_waste/page.module.css";
const page = () => {
    return (
        <section className={`mainContainer ${classes.section}`}>
            <p className=" text-5xl py-8 px-4">
                استبدال مخلفاتك الزراعية بنقاطنا{" "}
            </p>
            <div className={classes.form}>
                <div>
                    <div>
                        <label htmlFor="n2">نوع المخلفات الزراعية </label>
                        <select name="" id="n2">
                            <option value="wood">wood</option>
                            <option value="wood like agricultural">
                                wood like agricultural
                            </option>
                            <option value="waste">waste</option>
                            <option value="straw">straw</option>
                            <option value="animals skins ">
                                animals skins{" "}
                            </option>
                            <option value="manure, leaves">
                                manure, leaves
                            </option>
                            <option value="water hyacinth">
                                water hyacinth
                            </option>
                            <option value="leftover oil substances">
                                leftover oil substances
                            </option>
                            <option value="leftover high sugar content waste">
                                leftover high sugar content waste
                            </option>
                            <option value="algae, seaweed">
                                algae, seaweed
                            </option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="n1">
                            في حاله اخرى برجاء توضيح نوعه
                        </label>
                        <input
                            type="text"
                            placeholder="من فضلك أكتب أسم المخلف وتفاصيل أخري لو أمكن"
                            id="n1"
                            // value={data.Land_area}
                            // name="Land_area"
                            // onChange={handleData}
                        />
                    </div>
                    <div>
                        <label htmlFor="n3">كم الكميه</label>
                        <input
                            type="number"
                            placeholder="ادخل وزن المخلفات بالطن"
                            id="n3"
                            // value={data.Land_area}
                            // name="Land_area"
                            // onChange={handleData}
                        />
                    </div>
                    <div>
                        <label htmlFor="n4">الوحده </label>
                        <select name="" id="n4">
                            <option value="ton">ton</option>
                            <option value="kilogram">kilogram</option>
                            <option value="cubic ">cubic </option>
                            <option value="meter">meter</option>
                            <option value="other ">other </option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="n5">وحده اخرى</label>
                        <input
                            type="text"
                            placeholder="في حالة أخر من فضلك حدد الوحدة كتابة هنا 
                            "
                            id="n5"
                            // value={data.Land_area}
                            // name="Land_area"
                            // onChange={handleData}
                        />
                    </div>
                    <div>
                        <label htmlFor="n7"> الموعد الأقصي للإستلام </label>
                        <input
                            type="date"
                            name=""
                            id="n7"
                            placeholder="من فضلك حدد الموعد الأقصي للإستلام "
                        />
                    </div>
                    <div>
                        <label htmlFor="n8">مسئولية الشحن </label>
                        <select name="" id="n8">
                            <option value="seller ships ">seller ships </option>
                            <option value="buyer ships">buyer ships</option>
                        </select>
                    </div>
                </div>
                <button>تاكيد</button>
            </div>
        </section>
    );
};

export default page;
