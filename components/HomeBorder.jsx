import Image from "next/image";
export default function HomeBorder() {
    return (
        <div className="homeheaderscontainer">
            <div className="logo-container">
                <Image
                    src='/lilogo.png'
                    width={500}
                    height={500}
                />
            </div>
            <div className="headers"></div>
        </div>
    );
}
  