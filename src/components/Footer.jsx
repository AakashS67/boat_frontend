const Footer = () => {
    return (
        <>
            <footer className="bg-light">
                <div className="row p-1">
                    <div className="col text-center">
                        <span className="text-center"><p style={{ fontSize: "20px" }}> Solutions</p></span>
                        <div className="flex flex-col gap-2">
                            <p>Marketing</p>
                            <p>Analytics</p>
                            <p>Commerce</p>
                            <p>Insights</p>
                        </div>
                    </div>
                    <div className="col text-center">
                        <span className="text-center"><p style={{ fontSize: "20px" }}> Support</p></span>
                        <div className="flex flex-col gap-2">
                            <p>Pricing</p>
                            <p>Documentation</p>
                            <p>Guides</p>
                            <p>API Status</p>
                        </div>
                    </div>
                    <div className="col text-center">
                        <span className="text-center"><p style={{ fontSize: "20px" }}> Company</p></span>
                        <div className="flex flex-col gap-2">
                            <p>About</p>
                            <p>Jobs</p>
                            <p>Press</p>
                            <p>Partners</p>
                        </div>
                    </div>
                    <div className="col text-center">
                        <span className="text-center"><p style={{ fontSize: "20px" }}> Legal</p></span>
                        <div className="flex flex-col gap-2">
                            <p>Claim</p>
                            <p>Privacy</p>
                            <p>Terms</p>
                        </div>
                    </div>
                <hr className="mx-auto w-75" />
                <div className="mx-auto w-100 min-h-[30px]">
                    <p className="text-center" style={{fontWeight:"revert"}}>
                        Coding with Aakash Shinde
                    </p>
                </div>
                </div>
            </footer>
        </>
    )
}

export default Footer