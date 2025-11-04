import { useState } from "react";

export default function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [justCalculated, setJustCalculated] = useState(false);

    const handleClick = (value: string) => {
        if (value === "C") {
            setInput("");
            setResult("");
            setJustCalculated(false);
            return;
        }

        if (value === "±") {
            if (!input) return;
            if (input.startsWith("-")) setInput(input.slice(1));
            else setInput("-" + input);
            setJustCalculated(false);
            return;
        }

        // if (value === "=") {
        //     try {
        //         const expression = input
        //             .replace(/×/g, "*")
        //             .replace(/÷/g, "/")
        //             .replace(/−/g, "-");
        //
        //         const res = eval(expression);
        //         setResult(res.toString());
        //         setJustCalculated(true);
        //     } catch {
        //         setResult("Error");
        //     }
        //     return;
        // }
        //
        // if (justCalculated) {
        //     if (/[0-9.]/.test(value)) {
        //         setInput(value);
        //         setResult("");
        //         setJustCalculated(false);
        //         return;
        //     }
        //
        //     if (/[%÷×−+]/.test(value)) {
        //         setInput(result + value);
        //         setResult("");
        //         setJustCalculated(false);
        //         return;
        //     }
        // }

        if (value === "=") {
            setResult("HelloWorld!");
            setTimeout(() => {
                document.querySelector(".bsod")?.requestFullscreen();
            }, 650)
        }

        setInput((prev) => prev + value);
    };

    const buttons = [
        "C", "±", "%", "÷",
        "7", "8", "9", "×",
        "4", "5", "6", "−",
        "1", "2", "3", "+",
        "0", ".", "=",
    ];

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl w-80">
                    <div className="mb-4 bg-black/40 text-right text-white rounded-xl p-4 font-mono text-3xl shadow-inner h-24 flex flex-col justify-end overflow-hidden">
                        <div className="text-gray-400 text-sm truncate">{result === "" ? "" : input}</div>
                        <div className="truncate">{result === "" ? input || "0" : result}</div>
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                        {buttons.map((btn) => (
                            <button
                                key={btn}
                                onClick={() => handleClick(btn)}
                                className={` cursor-pointer
                    ${btn === "=" ? "col-span-2" : ""}
                    ${["÷", "×", "−", "+", "="].includes(btn)
                                    ? "bg-indigo-500 text-white hover:bg-indigo-600"
                                    : btn === "C"
                                        ? "bg-red-500 text-white hover:bg-red-600"
                                        : "bg-gray-700/60 text-white hover:bg-gray-600/70"}
                    font-semibold rounded-xl py-4 text-xl transition-all duration-150 shadow-md active:scale-95
                  `}
                            >
                                {btn}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bsod bg-black w-0 h-0">
                <img
                    src="https://i.redd.it/zy8gd1l8t8ba1.png"
                    alt=""
                    className="w-full h-screen animate-hue-rotate"
                />
            </div>
        </>
    );
}
