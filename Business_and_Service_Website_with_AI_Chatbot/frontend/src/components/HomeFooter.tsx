import React from 'react';
import Link from 'next/link';
export default function Footer() {
    return (
        <div>
            <footer className="footer bg-black  border-t border-base-100 text-white p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link href="/services" className="link link-hover">Website</Link>
                    <Link href="/services" className="link link-hover">Design</Link>
                    <Link href="/services" className="link link-hover">Wordpress</Link>
                    <Link href="/services" className="link link-hover">SEO</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link href="/about" className="link link-hover">About us</Link>
                    <Link href="/contact" className="link link-hover">Contact</Link>
                    <Link href="/work" className="link link-hover">Work</Link>
                    <Link href="/services" className="link link-hover">Service</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer bg-black text-white border-t border-base-300 px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current">
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <p>
                        Service Website.
                        <br />
                        Providing reliable tech.
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link target='-blank' href="https://github.com/omsah84/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.47-2.382 1.236-3.222-.123-.304-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.242 2.873.119 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.807 5.623-5.479 5.92.43.37.812 1.102.812 2.222 0 1.606-.015 2.896-.015 3.293 0 .322.218.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"></path>
                            </svg>

                        </Link>
                        <Link target='-blank' href="https://linkedin.com/in/omsah84/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.729V1.729C24 .774 23.208 0 22.23 0zM7.119 20.452H3.558V9.035h3.561v11.417zM5.339 7.555a2.062 2.062 0 1 1 .002-4.123 2.062 2.062 0 0 1-.002 4.123zm15.113 12.897h-3.561v-5.659c0-1.349-.028-3.088-1.88-3.088-1.881 0-2.17 1.464-2.17 2.977v5.77H9.28V9.035h3.418v1.561h.049c.476-.902 1.637-1.85 3.369-1.85 3.601 0 4.267 2.37 4.267 5.457v6.249z"></path>
                            </svg>

                        </Link>
                        <Link target='-blank' href="https://omsahwebsite.vercel.app/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M20 2H4C2.897 2 2 2.897 2 4v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V4h16l.002 16H4zm9-14h3v4h-3V6zM6 6h3v4H6V6zm7 6h3v4h-3v-4zm-7 0h3v4H6v-4z"></path>
                            </svg>

                        </Link>
                        <Link target='-blank' href="https://omsahportfolio.vercel.app/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M20 6h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12zm-4-8h-4v-2h4v2z"></path>
                            </svg>
                        </Link>
                        <Link target='-blank' href="https://omsahdeveloper.bio.link/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M10.59 13.41a1 1 0 0 0 1.42 0l2.18-2.18a3 3 0 0 0 0-4.24L11.8 4.19a3 3 0 0 0-4.24 0l-2.18 2.18a3 3 0 0 0 0 4.24 1 1 0 0 0 1.42-1.42 1 1 0 0 1 0-1.41l2.18-2.18a1 1 0 0 1 1.41 0l2.18 2.18a1 1 0 0 1 0 1.41l-2.18 2.18a1 1 0 0 0 0 1.42zm8.54-8.54a5 5 0 0 0-7.08 0l-1.59 1.59a1 1 0 0 0 1.42 1.42l1.59-1.59a3 3 0 0 1 4.24 4.24l-1.59 1.59a1 1 0 0 0 1.42 1.42l1.59-1.59a5 5 0 0 0 0-7.08zM4.19 15.8a5 5 0 0 0 7.08 0l1.59-1.59a1 1 0 0 0-1.42-1.42l-1.59 1.59a3 3 0 0 1-4.24-4.24l1.59-1.59a1 1 0 1 0-1.42-1.42l-1.59 1.59a5 5 0 0 0 0 7.08z"></path>
                            </svg>
                        </Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
}
