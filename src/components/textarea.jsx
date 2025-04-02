import { useEffect, useRef, useState } from "react"


function Textarea() {

    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);
    const [isBlinking , setIsBlinking] = useState(true)
    const inputRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
          setIsBlinking((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
      }, []);

      const focusInput = () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      };
    

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if (input.trim() === "clear") {
            setOutput([]);
            setInput("");
            return;
        }
    

        let newOutput = [...output, `terminal@command: ${input}`];

        if (input.startsWith("echo ")) {
            const echoText = input.slice(5);
            newOutput.push(`>>> ${echoText}`)
        }  else if (input === 'hackit') {
            newOutput.push(">>> Initializing hack mode...😎");
            setOutput(newOutput);
            setInput("");
            setTimeout(() => {
                setOutput((prev) => [...prev, ">>> Bypassing firewalls...😬"]);
            }, 1000);
            setTimeout(() => {
                setOutput((prev) => [...prev, ">>> Injecting trojan virus...💉"]);
            }, 2000);
            setTimeout(() => {
                setOutput((prev) => [...prev, ">>> Cracking password...⛓️‍💥"]);
            }, 3000);
            setTimeout(() => {
                setOutput((prev) => [...prev, ">>> Access Granted! Just kidding 😆"]);
            }, 4500);
            
        } else if(input === 'help'){
            newOutput.push(">>> available commands are: [ help , whois , skills , whoami , projects , socials , contact , hackit , github, clear ]")
        } else if(input === 'whois'){
            newOutput.push(">>> Hello , I am Mridul!! a 1st year student studying in IILM university.who is currently learning web-dev and some basic ai/ml. ")
        } else if(input === 'skills'){
            newOutput.push(">>> \n Languages: C , Python , Javascript , MySQL , HTML/CSS \n Framerworks and Libraries: React.js , Tailwind CSS , Bootstrap , Redux, ShadCN \n Tools: VScode, Git, Github , npm , vite , vercel , netlify ")
        } else if(input === 'whoami'){
            newOutput.push(">>> Hello Stranger -- how would i know you?? ")
        } else if(input === 'projects'){
            newOutput.push(">>> work in process ⚠️")
        } else if(input === 'github'){
            newOutput.push(">>> Opening github profile... ")
            window.open("https://github.com/mridulxjain", "_blank");
        } else if(input === 'socials'){
            newOutput.push(">>> \n Twitter/X : @mridulljain \n Instagram: @mj.x.x.x.x \n LinkedIn: @mridulxjain \n Github: @mridulxjain")
        } else if(input === 'contact'){
            newOutput.push(">>> You can contact me on twitter( now X ) or instagram or use my Mail. \n Mail: mriduljain2604@gmail.com")
        } else{
            newOutput.push(`>>> command not found: ${input}`)
        }
        setOutput(newOutput);
        setInput('');
    }
    
    return(
        <div className="text-[#519975] m-5 pb-2" onClick={focusInput}>
            <div>welcome to the terminal.</div>
            <div>for a list of available commands , type <span className=" glow text-white font-mono">'help'</span>.</div>


            <div className="py-2">
                <div className="space-y-2">
                 {output.map((line, index) => (
                 <div key={index} className="whitespace-pre-wrap">{line}</div>
                 ))}
                </div>
            </div>

            <form onSubmit={handleSubmit} className="pt-2 flex">
                <span>terminal@command: </span>
                <span className="bg-transparent outline-none pl-1">
                    {input}
                    <span className={`text-gray-400 font-bold ${isBlinking ? "opacity-100" : "opacity-0"}`}>█</span>
                </span>
                    <input
                        type="text"
                        value={input}
                        ref = {inputRef}
                        onChange={handleInputChange}
                        className="absolute opacity-0 left-[-9999px]"
                        autoFocus
                    />
            </form>
        </div>

        



    )
}

export default Textarea;