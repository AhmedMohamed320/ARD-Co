import React from "react";
import classes from "./Services.module.css";
import { MdFlightTakeoff } from "react-icons/md";
import Link from "next/link";
const Services = () => {
    return (
        <section className={classes.section}>
            <Link href="/service_1">
                <p>
                    تحليل التربة{" "}
                    <span>
                        <MdFlightTakeoff />
                    </span>
                </p>
                <p>
                    أهلًا وسهلًا بالضيوف الكرام في رحاب مدرستنا، نرحب بكم جميعًا
                    ونأمل أن تكون زيارتكم للمدرسة فيها الكثير من الفائدة، وتحقيق
                    الغاية المرجوّة من الزيارة.
                </p>
            </Link>
            <Link href="service_2">
                <p>
                     أستبدال المخلفات الزراعية {" "}
                    <span>
                        <MdFlightTakeoff />
                    </span>
                </p>
                <p>
                    أهلًا وسهلًا بالضيوف الكرام في رحاب مدرستنا، نرحب بكم جميعًا
                    ونأمل أن تكون زيارتكم للمدرسة فيها الكثير من الفائدة، وتحقيق
                    الغاية المرجوّة من الزيارة.
                </p>
            </Link>
            <Link href="service_3">
                <p>
                    عرض مخلفاتك الزراعية {" "}
                    <span>
                        <MdFlightTakeoff />
                    </span>
                </p>
                <p>
                    أهلًا وسهلًا بالضيوف الكرام في رحاب مدرستنا، نرحب بكم جميعًا
                    ونأمل أن تكون زيارتكم للمدرسة فيها الكثير من الفائدة، وتحقيق
                    الغاية المرجوّة من الزيارة.
                </p>
            </Link>
            <Link href="service_4">
                <p>
                    عرض مطلوبات التصنيع الأخضر  {" "}
                    <span>
                        <MdFlightTakeoff />
                    </span>
                </p>
                <p>
                    أهلًا وسهلًا بالضيوف الكرام في رحاب مدرستنا، نرحب بكم جميعًا
                    ونأمل أن تكون زيارتكم للمدرسة فيها الكثير من الفائدة، وتحقيق
                    الغاية المرجوّة من الزيارة.
                </p>
            </Link>
        </section>
    );
};

export default Services;
