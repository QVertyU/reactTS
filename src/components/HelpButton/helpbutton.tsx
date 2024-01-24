import {FC, MouseEvent, PropsWithChildren, useState} from "react";
import ChevronDoubleLeftIcon from "@heroicons/react/16/solid/ChevronDoubleLeftIcon"

interface Props {

}

const showWindow = (event: MouseEvent<SVGSVGElement>) => {
    event.currentTarget.classList.toggle('rotate-180');
}

export const HelpButton: FC<PropsWithChildren<Props>> = () => {

    const [ContentVisibilty, setContentVisibilty] = useState<boolean>(false);

    return (
        <>
            <div
                className={'flex justify-center items-center text-white rounded-bl-full rounded-tl-full bg-gray-800 h-10 w-10 fixed right-0 bottom-1/2 hover:cursor-pointer'}>
                <ChevronDoubleLeftIcon className={'h-full w-full transition-all duration-500'}
                                       onClick={(event) => showWindow(event)}/>
            </div>
        </>
    );
}