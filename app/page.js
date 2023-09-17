import classes from "./Home.module.css";
import { MdNorthWest } from "react-icons/md";
import { BsArrowUpLeft } from "react-icons/bs";
import { Fragment } from "react";

export default function Home() {
    return (
        <Fragment>
            <div className={classes.up}>
                <div className={classes.circle1}></div>
                <div className={classes.circle2}></div>
                <section className={`mainContainer ${classes.section}`}>
                    <div className={classes.part1}>
                        <div className={classes.text}>
                            <div>
                                <div className={classes.image3d}>
                                    <img src="/image/hero-1.png" alt="" />
                                </div>
                                <div className={classes.image3d_2}>
                                    <img src="/image/hero-2.png" alt="" />
                                </div>
                                <p>ارض كو</p>
                                <div className={classes.specialSpan}>
                                    <span> انتاجيه اعلى</span>

                                    <span> افضل </span>

                                    <span> اجود</span>
                                </div>
                                <p className={classes.sub}>
                                    شركة أرض-كو (ARD-Co) هي شركة تطوير بديلة
                                    ومتجددة تهتم بالتنمية المستدامة والمستدامة
                                    والطاقة المتجددة.
                                </p>
                                <div className={classes.join}>
                                    <div>
                                        <button>انضم الينا الان</button>
                                        <BsArrowUpLeft
                                            className={classes.icon}
                                        />
                                    </div>
                                    <div className="flex items-center gap-12">
                                        <ul className="flex">
                                            <li>
                                                <img
                                                    src="/image/service-1.png"
                                                    alt=""
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="/image/service-2.png"
                                                    alt=""
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="/image/service-3.png"
                                                    alt=""
                                                />
                                            </li>
                                        </ul>
                                        <p>
                                            +٥٠٠ <span>مستخدم نشط معانا</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.part2}>
                        <p>خدماتنا</p>
                        <div className={classes.service}>
                            <div>
                                <div className={classes.img}>
                                    <img src="/image/s1 (4).png" alt="" />
                                </div>
                                <div>
                                    <p>تحليل التربة</p>
                                    <p>
                                        تحليل التربة يساهم في فهم خصائصها وتحسين
                                        جودة الزراعة.
                                    </p>
                                </div>
                                <div className={classes.arrow}>
                                    <MdNorthWest />
                                </div>
                            </div>
                            <div>
                                <div className={classes.img}>
                                    <img src="/image/s1 (1).png" alt="" />
                                </div>
                                <div>
                                    <p> برنامج أستبدال المخلفات الزراعية</p>
                                    <p>
                                        الاشتراك في برنامج استبدال المخلفات
                                        الزراعية يعزز الاستدامة البيئية
                                        والاقتصادية.
                                    </p>
                                </div>
                                <div className={classes.arrow}>
                                    <MdNorthWest />
                                </div>
                            </div>
                            <div>
                                <div className={classes.img}>
                                    <img src="/image/s1 (3).png" alt="" />
                                </div>
                                <div>
                                    <p>عرض مخلفاتك الزراعية</p>
                                    <p>
                                    هذا البرنامج يهدف إلى تشجيع المزارعين على عرض مخلفاتهم الزراعية.
                                    </p>
                                </div>
                                <div className={classes.arrow}>
                                    <MdNorthWest />
                                </div>
                            </div>
                            <div>
                                <div className={classes.img}>
                                    <img src="/image/s1 (2).png" alt="" />
                                </div>
                                <div>
                                    <p>التصنيع الاخضر</p>
                                    <p>
                                    عرض مطلوبات التصنيع الأخضر  الخاصة بمصنعك للموردين (مثل المخلفات الزراعية وماشابه) 

                                    </p>
                                </div>
                                <div className={classes.arrow}>
                                    <MdNorthWest />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    );
}
