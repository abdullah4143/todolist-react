import { ReactNode } from "react";

interface AlertProps {
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'success' | 'danger';
    onAlertClose: () => void;
}

const Alert = ({children ,color,onAlertClose} : AlertProps) => {
    
  return (
    <div className={`alert alert-${color} alert-dismissible`} role="alert">
        <p>{children}</p>
        <button type="button" onClick={onAlertClose} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert