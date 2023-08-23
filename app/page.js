import { Fragment } from "react";
import classes from "./page.module.css";
import Services from "@/components/services/Services";

export default function Home() {
    return (
        <Fragment>
            <section className={classes.section}>
                <div className={classes.text}>
                    أهلًا وسهلًا بالضيوف الكرام في رحاب مدرستنا، نرحب بكم جميعًا
                    ونأمل أن تكون زيارتكم للمدرسة فيها الكثير من الفائدة، وتحقيق
                    الغاية المرجوّة من الزيارة.
                </div>
                <Services />
            </section>
        </Fragment>
    );
}
