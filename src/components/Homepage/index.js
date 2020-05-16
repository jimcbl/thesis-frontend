import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';

const recorder = new MicRecorder({
    bitRate: 128
});

const Homepage = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [preview, setPreview] = useState();
    const handleOnClick = () => {
        return isRecording ? stopRecording() : startRecording();
    };

    const startRecording = () => {
        recorder
            .start()
            .then(() => {
                setIsRecording(true);
            })
            .catch(e => {
                console.error(e);
            });
    };

    const stopRecording = () => {
        recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                console.log(buffer, blob);
                const file = new File(buffer, 'music.mp3', {
                    type: blob.type,
                    lastModified: Date.now()
                });

                const previewURL = URL.createObjectURL(file);
                setPreview(previewURL);
                setIsRecording(false);
            })
            .catch(e => {
                console.error(e);
            });
    };

    return (
        <section className="section" id="homepage">
            <div className="container">
                <div className="record-button-container">
                    <div
                        className={'record-button ' + (isRecording ? 'is-recording' : '')}
                        onClick={handleOnClick}
                    >
                        <img className="record-icon" src="./mic_icon.svg" alt="mic-wrapper" />
                    </div>
                </div>
                {preview && (
                    <audio
                        controls
                        className="audio"
                        src={preview}
                        style={{ marginBottom: '15px', display: 'block' }}
                    >
                        Your browser does not support the
                        <code>audio</code> element.
                    </audio>
                )}
                <div className="result has-text-centered has-text-weight-semibold">
                    <p>Result:</p>
                    <p className="has-text-weight-normal">hahahahaahahah</p>
                </div>
            </div>
        </section>
    );
};

export default Homepage;
