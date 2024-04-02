import React, { useEffect, useState, useCallback } from 'react';
import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/lang-javascript';
import { java } from '@codemirror/lang-java';
import { go } from '@codemirror/legacy-modes/mode/go';


export default function Editor(props) {
    let language;

    const [value, setValue] = useState("");
    // const [language, setLanguage] = useState("");
    const onChange = useCallback((val, viewUpdate) => {
        setValue(val);
    }, []);

    useEffect(() => {
        console.log();
        switch (props.language) {
            case 'javascript':
                setValue("console.log('hello world!');")
                break;
            case 'java':
                setValue('System.out.println("hello world!");')
                break;
            case 'go':
                setValue(`package main
import "fmt"
                
func main() {
    fmt.Println("Hello, 世界")
}`)
                break;
            default:
                break;
        }
    }, [props.language])

    const codeOptions = {
        theme: "monokai",
        // mode: "text/x-sql",
        line: true,
        lineNumbers: true,
        tabSize: 4,
        styleActiveLine: true,
        lineWrapping: true,
        foldGutter: true
    };

    return (

        <div>
            {props.language === 'javascript' && (
                <div>
                    <CodeMirror value={value} height="200px" onChange={onChange} options={codeOptions} extensions={[javascript({ jsx: true })]} />
                </div>
            )}
            {props.language === 'java' && (
                <div>
                    <CodeMirror value={value} height="200px" onChange={onChange} options={codeOptions} extensions={[java()]} />
                </div>
            )}
            {props.language === 'go' && (
                <div>
                    <CodeMirror value={value} height="200px" onChange={onChange} options={codeOptions} extensions={[StreamLanguage.define(go)]} />;
                </div>
            )}
        </div>
    );
}
