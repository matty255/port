import { Icon } from '@iconify/react';

export const IconBox = (props) => {
    const {skillName, icon, color, textColor} = props;

    // https://icon-sets.iconify.design/ant-design/html5-filled/
    return <>
    <div className="flex flex-col w-14 h-14">
    <Icon icon={icon} className="w-14 h-12 peer" style={{color: `${color}`}} />
    <p className="text-[0.25rem] w-13 h-5 text-center truncate font-minB" style={{color: `${textColor}`}} >{skillName}</p>
    {skillName.length > 6 &&  <p className="text-[0.25rem] text-center truncate font-minB fixed mt-10 pr-1 bg-white invisible peer-hover:visible" style={{color: `${textColor}`}} >{skillName}</p>}
   
    </div>
    </>
}