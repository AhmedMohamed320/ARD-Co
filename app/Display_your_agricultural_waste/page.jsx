import React from "react";
import classes from "./page.module.css";

const page = () => {
    return (
        <section className={`mainContainer ${classes.section}`}>
            <p className=" text-5xl py-8">عرض مخلفاتك الزراعيه</p>
            <div className={classes.form}>
                <div>
                    <div>
                        <label htmlFor="n1">كم طن</label>
                        <input
                            type="number"
                            placeholder="ادخل وزن المخلفات بالطن"
                            id="n1"
                            // value={data.Land_area}
                            // name="Land_area"
                            // onChange={handleData}
                        />
                    </div>
                    <div>
                        <label htmlFor="n2">نوع المخلفات الزراعية </label>
                        <select name="" id="n2">
                            <option value="straw">straw</option>
                            <option value="roots">roots</option>
                            <option value="wood">wood</option>
                            <option value="manure">manure</option>
                            <option value="poultry farm ">poultry farm </option>
                            <option value="debris">debris</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="n3"> المحصول الأصلي </label>
                        <select name="" id="n3">
                            <option value="wheat">wheat</option>
                            <option value="rice">rice</option>
                            <option value="sugar cane ">sugar cane </option>
                            <option value="corn">corn</option>
                            <option value="cotton ">cotton </option>
                            <option value="flax">flax</option>
                            <option value="skins of slaughtered animals">
                                skins of slaughtered animals
                            </option>
                            <option value="algae">algae</option>
                            <option value="water hyacinth">
                                water hyacinth
                            </option>
                            <option value="seaweed ">seaweed </option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="n4"> الحالة </label>
                        <select name="" id="n4">
                            <option value="dry weight">dry weight</option>
                            <option value="dehydrated">dehydrated</option>
                            <option value="shredded">shredded</option>
                            <option value="compressed">compressed</option>
                            <option value="packaged in sacks">
                                packaged in sack{" "}
                            </option>
                            <option value="packaged in boxes">
                                packaged in boxes
                            </option>
                            <option value="still in piles at the field">
                                still in piles at the field
                            </option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="n5"> كيفية النقل </label>
                        <select name="" id="n5">
                            <option value="The buyer ships ">
                                The buyer ships{" "}
                            </option>
                            <option value="The seller ships">
                                The seller ships
                            </option>
                            <option value="null"></option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="n6"> الميعاد المفضل للبيع </label>
                        <input type="date" name="" id="6" />
                    </div>
                </div>
                <button>تاكيد</button>
            </div>
        </section>
    );
};

export default page;
