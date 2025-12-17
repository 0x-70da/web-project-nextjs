'use client';
import { logoutAction } from "@/app/(user)/me/logoutAction";

const Button = ({data , children, styles }: {data?: string, children: string, styles?: string}) => {
  return (
    <button className={`btn ${styles}`} onClick={() => logoutAction()}>
        {children}
    </button>
  )
}

export default Button