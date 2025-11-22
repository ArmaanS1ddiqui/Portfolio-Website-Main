import React, { useState, useEffect, useRef } from "react";
import "./Terminal.css";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [isBooting, setIsBooting] = useState(true);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // --- THE NEW "ANONYMOUS" BOOT SEQUENCE ---
  useEffect(() => {
    const bootLines = [
      "> INITIATING SECURE HANDSHAKE...",
      "> ENCRYPTING CONNECTION [256-BIT]...",
      "> CONNECTING TO REMOTE HOST: 192.168.X.X...",
      "> ACCESS GRANTED: GUEST LEVEL 1.",
      "> MOUNTING VIRTUAL FILE SYSTEM...",
      "> LOADING MODULES: KERNEL, SHELL, UI...",
      "> STATUS: ONLINE.",
      " ",
    ];

    let delay = 0;

    bootLines.forEach((line, index) => {
      delay += Math.random() * 500 + 200;
      setTimeout(() => {
        setOutput((prev) => [...prev, line]);
        if (index === bootLines.length - 1) {
          setIsBooting(false);
          setTimeout(() => {
            setOutput((prev) => [
              ...prev,
              "Welcome to the Mainframe. Type 'help' for access.",
            ]);
          }, 500);
        }
      }, delay);
    });
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output]);

  useEffect(() => {
    if (!isBooting) {
      inputRef.current?.focus();
    }
  }, [isBooting]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const command = input.trim().toLowerCase();
      // Change prompt to generic "guest"
      const newOutput = [...output, `[guest@portfolio-server ~]$ ${input}`];

      switch (command) {
        case "help":
          newOutput.push(
            "Available commands:",
            "  about     - Owner Identity",
            "  status    - Server Status",
            "  socials   - External Links",
            "  clear     - Purge Logs",
            "  neofetch  - Hardware Config",
            "  sudo      - Admin Access"
          );
          break;
        case "about":
          newOutput.push(
            "Armaan Aijaz Siddiqui. System Architect & Full Stack Engineer. Specializing in automation and high-availability systems."
          );
          break;
        case "status":
          newOutput.push(
            "SYSTEM INTEGRITY: 100%",
            "FIREWALL: ACTIVE",
            "CURRENT SESSION: GUEST (READ-ONLY)"
          );
          break;
        case "socials":
          newOutput.push("LinkedIn: /in/your-profile", "GitHub: @your-handle");
          break;
        case "neofetch":
          newOutput.push(
            // FAKE / COOL SPECS
            "    .-------.     GUEST@PORTFOLIO-SERVER",
            "   /|  CPU  |\\    ----------------------",
            "  | |  99%  | |   OS: PortfolioOS (Virtual)",
            "  | |       | |   Host: Mainframe_Node_01",
            "  | |_______| |   Uptime: 99.999%",
            "   \\|_______|/    Kernel: v20.77-cyber",
            "    '-------'     Shell: ZSH (Restricted)",
            "                  CPU: Virtual Quantum Core (x16)",
            "                  GPU: Neural Engine Unit",
            "                  Memory: 128GB (Allocated)"
          );
          break;
        case "sudo":
          newOutput.push("Root access denied. This incident will be reported.");
          break;
        case "clear":
          setOutput([]);
          setInput("");
          return;
        case "":
          break;
        default:
          newOutput.push(`zsh: command not found: ${command}`);
      }

      setOutput(newOutput);
      setInput("");
    }
  };

  return (
    <div
      className="terminal-page"
      onClick={() => !isBooting && inputRef.current?.focus()}
    >
      <div className="terminal-window">
        <div className="terminal-header-bar">
          <div className="traffic-lights">
            <span className="light red"></span>
            <span className="light yellow"></span>
            <span className="light green"></span>
          </div>
          <div className="terminal-title">
            {isBooting ? "CONNECTING..." : "guest@portfolio-server: ~"}
          </div>
        </div>

        <div className="terminal-body">
          {output.map((line, index) => (
            <div key={index} className="terminal-line">
              <pre>{line}</pre>
            </div>
          ))}

          {!isBooting && (
            <div className="input-line">
              {/* UPDATED PROMPT */}
              <span className="prompt">[guest@portfolio-server ~]$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="terminal-input"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
