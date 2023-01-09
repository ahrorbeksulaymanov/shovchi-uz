import { useNavigate } from "react-router-dom";

const ToBackBtn = () => {
    const history = useNavigate
  return (
    <button onClick={() => history(-1)} className="flex text-[17px] mb-5" style={{alignItems:"center"}}>
      <svg
        className="w-[40px] mr-3 p-2 bg-slate-300 rounded-full"
        fill="#474747"
        viewBox="0 0 24 24"
        id="left"
        data-name="Flat Line"
        xmlns="http://www.w3.org/2000/svg"
        class="icon flat-line"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_iconCarrier">
          <line
            id="primary"
            x1="3"
            y1="12"
            x2="21"
            y2="12"
            style={{fill:"none"}}
            stroke='#474747'
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          ></line>
          <polyline
            id="primary-2"
            data-name="primary"
            points="10 19 3 12 10 5"
            style={{fill:"none"}}
            stroke='#474747'
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          ></polyline>
        </g>
      </svg>Orqaga
    </button>
  );
};
export default ToBackBtn;
