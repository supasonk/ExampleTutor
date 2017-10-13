import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/article.css";
import MediaQuery from 'react-responsive'
const Desktop = ({children}) => <MediaQuery minWidth={1280} children={children}/>;
const Tablet = ({children}) => <MediaQuery minWidth={768} maxWidth={1279} children={children}/>;
const Mobile = ({children}) => <MediaQuery maxWidth={768} children={children}/>;
class CollegeArticle extends React.Component {
    render() {
        return (
            <div>
                <Desktop>
                    <div className='desktop-navbar-offset'></div>
                </Desktop>
                <Mobile>
                    <div className='mobile-navbar-offset'></div>
                </Mobile>
                <Tablet>
                    <div className='desktop-navbar-offset'></div>
                </Tablet>
                <Desktop>
                    <div className="container">
                        <Content />
                    </div>
            </Desktop>
            <Tablet>
                <div className="container">
                    <Content />
                </div>
            </Tablet>>
            <Mobile>
                <div className="container mobile-article-padding">
                    <Content />
                </div>
            </Mobile>
        </div>


        );
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="text-center">มัธยมปลาย ตัดสินใจผิด ชีวิตเปลี่ยน
                        </h2>
                        <hr className = 'colored-line m-purple'/>
                    </div>
                </div>
                <div className="row article-row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8 qa">
                        <div className='row'>
                            <div className='col-md-8 col-md-offset-2'>
                                <img src='src/client/app/assets/images/collegearticle.jpg' className='img-responsive'/>
                            </div>
                        </div>
                        <div className = 'paragraph'></div>
                        <div className = 'row'>
                            <h5>
                            ในหัวข้อนี้ถือเป็น<strong>เรื่องที่สำคัญที่สุดต่อน้อง ๆ
                            มัธยมปลาย</strong>ที่กำลังเตรียมความพร้อมในการสอบเข้ามหาวิทยาลัย
                            เพราะเป็นช่วงที่<strong className = 'red'>ส่งผลต่อสิ่งที่ต้องเรียน ความถนัด และอาชีพในอนาคต</strong>
                            ช่วงนี้สำคัญมากที่สุดเลยนะคะ น้อง ๆ บางคนอาจค้นพบทางที่ตัวเองถนัดแล้ว แต่ถ้าน้อง ๆ
                            ยังมีคำถามเหล่านี้อยู่ในหัวว่า
                            </h5>
                            <div className = 'text-center quote-padding red'><strong>“เราอยากเรียนต่อคณะไหนกันนะ อยากเป็นอาชีพอะไร เราชอบวิชาไหนกันแน่
                            เราถนัดวิชาไหนบ้าง”</strong></div>
                        </div>
                        <div className = 'row'>
                            <h5>
                            อาจทำให้เป็นเรื่องยากในการสอบเข้าได้
                            การตัดสินใจเลือกคณะที่เหมาะกับเราสามารถเป็นจุดเริ่มต้นของความสุขทั้งชีวิตได้เลยนะ
                            วันนี้พี่ ๆ ทาง CULH จึงได้รวบรวม<strong>คำถามยอดฮิตปัญหาที่พบเจอบ่อยที่สุดในวัยมัธยมปลาย</strong>
                            และมี<strong>เคล็ดลับในการสอบเข้ามหาวิทยาลัยให้ได้คะแนนดี</strong> เพื่อเสริมสร้างความมั่นใจ
                            ชี้แนะแนวทาง และเป็นแรงผลักดันให้แก่น้อง ๆทุกคนค่ะ<br></br>
                            </h5>
                        </div>
                        <div className = 'text-center paragraph header'><strong>คำถามยอดฮิต ปัญหาที่พบเจอบ่อยที่สุดในวัยมัธยมปลาย</strong></div>
                        <br></br>
                        <div className = 'row'>
                            <strong className = 'red'>Q: ถ้ายังไม่รู้ว่าตัวเราเองอยากเข้าคณะไหน ทำอย่างไรดีคะ?</strong>
                            <h5>A: ต้องขอบอกก่อนว่าเรื่องนี้น้องๆหลายคนอาจมองว่าไม่สำคัญ แต่จริง ๆแล้ว
                            สำคัญมากที่สุด!!! การที่เรารู้ก่อนว่า
                            <strong className = 'red'>เราอยากเข้าคณะไหนจะทำให้เราได้เปรียบและสามารถเตรียมตัวสอบได้เร็วกว่าคนอื่น</strong>
                            ก่อนอื่นเริ่มน้อง ๆ ต้องหาว่า น้องชอบหรือถนัดเรียนวิชาไหน
                            และเรามีความสุขกับการเรียนวิชานั้นมั้ย ถ้าใช่
                            นั่นอาจเป็นทางที่เหมาะกับเราในการเรียนมหาลัยได้</h5>
                        </div>
                        <br></br><br></br>
                        <div className = 'row'>
                            <strong className = 'red'>Q: อ่านหนังสืออย่างไร? เพื่อเตรียมตัวสอบเข้ามหาวิทยาลัยชื่อดังได้สำเร็จ</strong>
                            <h5>A: อันดับแรก น้องๆต้องรู้ก่อนว่า “อยากเข้าคณะไหน” <strong className = 'red'>ถ้าเรามีเป้าหมายแล้ว
                            เราจะสามารถวางแผนการอ่านและการเรียนได้ง่ายขึ้น</strong> น้อง ๆ
                            ต้อง<strong>ศึกษาวิชาและข้อสอบ</strong>ที่ต้องใช้ในการสอบ แล้วหาวิธีที่ช่วยทำให้บรรลุเป้าหมาย นั่นคือ
                            <strong>มีใจอยากอ่านอ่านหนังสือ</strong>ด้วยตัวเองก่อน แต่ถ้าทำไม่ได้ พี่ขอแนะนำ ให้น้องหาครูติวเลยค่ะ
                            <strong>ติวแบบตัวต่อตัว</strong>ยิ่งดี ถ้าน้องได้เรียนกับรุ่นพี่มหาวิทยาลัยชื่อดัง
                            พี่เชื่อว่าจะทำให้เราเกิดแรงจูงใจในการสอบเข้ามากขึ้น เพราะพี่ๆเหล่านี้
                            เป็นผู้มีประสบการณ์มาก่อน และรู้แนวข้อสอบได้เป็นอย่างดี ดั้งนั้น
                            <strong className = 'red'>การเรียนกับผู้ที่ประสบความสำเร็จมาก่อน ย่อมทำให้เราประสบความสำเร็จ</strong>ตามไปด้วย</h5>
                        </div>
                        <br></br><br></br>
                        <div className = 'row'>
                            <strong className = 'red'>Q: เราอยู่โรงเรียนต่างจังหวัด ธรรมดาๆเลย แต่อยากเข้า จุฬา ธรรมศาสตร์ มหิดล เป็นไปได้มั้ยคะ?</strong>
                            <h5>A: เป็นไปได้แน่นอน! ขอเพียงน้อง ๆ ตั้งใจจริง อยากสอบติดจริง ขยัน อดทน ทางพี่ๆ CULH
                            ยินดีส่งติวเตอร์ไปช่วยติวน้องถึงที่บ้านอีกแรง ถ้าเป็นต่างจังหวัด ทาง CULH
                            ก็มีเรียนแบบออนไลน์(SKYPE)ได้ค่ะ พี่เชื่อว่า ถ้าน้องขยัน ตั้งใจ อดทน
                            ทำตามคำแนะนำของพี่ๆ ผลลัพธ์นั้น ขอรับประกัน ติดแน่นอนค่ะ
                            </h5>
                        </div>
                        <br></br><br></br>
                        <div className = 'row'>
                            <strong className = 'red'>Q: อันดับโรงเรียนในกรุงเทพมหานครที่แอดมิชชั่นติดสูงสุด มีที่ไหนบ้าง?</strong>
                            <div className = 'citation'>คิดเฉพาะโรงเรียนในสังกัดสำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน***</div>
                            <h5>A: อันดับ 1 โรงเรียนเตรียมอุดมศึกษา<br></br>
                                อันดับ 2 โรงเรียนสตรีวิทยา<br></br>
                                อันดับ 3 โรงเรียนบดินทร์เดชา (สิงห์ สิงเหสนี)<br></br>
                                อันดับ 4 โรงเรียนฤทธิยะวรรณาลัย<br></br>
                                อันดับ 5 โรงเรียนเทพศิรินทร์<br></br>
                                อันดับ 6 โรงเรียนเบญจมราชาลัย (ในพระบรมราชูปถัมภ์)<br></br>
                                อันดับ 7 โรงเรียนสามเสนวิทยาลัย<br></br>
                                อันดับ 8 โรงเรียนสตรีวัดอัปสรสวรรค์<br></br>
                                อันดับ 9 โรงเรียนโยธินบูรณะ<br></br>
                                อันดับ 10 โรงเรียนบางปะกอกวิทยาคม<br></br>
                                อันดับ 11 โรงเรียนศึกษานารี<br></br>
                                อันดับ 12 โรงเรียนสตรีวิทยา 2<br></br>
                                อันดับ 13 โรงเรียนวัดสุทธิวราราม<br></br>
                                อันดับ 14 โรงเรียนสวนกุหลาบวิทยาลัย<br></br>
                                อันดับ 15 โรงเรียนสายปัญญา ในพระบรมราชินูปถัมภ์<br></br>
                                อันดับ 16 โรงเรียนบางกะปิ<br></br>
                                อันดับ 17 โรงเรียนเตรียมอุดมศึกษาพัฒนาการ<br></br>
                                อันดับ 18 โรงเรียนบดินทร์เดชา (สิงห์ สิงเหสนี) 2<br></br>
                                อันดับ 19 โรงเรียนสารวิทยา<br></br>
                                อันดับ 20 โรงเรียนหอวัง<br></br>
                                <br></br>*แต่ถ้าน้อง ๆ ไม่ได้อยู่ในโรงเรียนดังต่อไปนี้ ไม่ต้องกังวลนะคะ
                                โรงเรียนเป็นแค่ส่วนหนึ่งไม่สำคัญเท่ากับการตั้งใจเรียนด้วยใจของน้องๆ
                                <strong className = 'red'>ทาง CULH ยินดีช่วยน้อง ๆอย่างเต็มที่ ด้วยการจัดส่งติวเตอร์คุณภาพไปดูแลการเรียนของน้อง ๆ
                                ทำให้น้องสอบติด</strong>แน่นอนค่ะ</h5>
                            </div>
                            <br></br><br></br>
                            <div className = 'row'>
                                <strong className = 'red'>Q: อีกไม่กี่เดือนก็ใกล้สอบแล้ว หนูพึ่งค้นพบตัวเองว่าอยากเปลี่ยนคณะหนูยังสามารถเตรียมตัวไปสอบทันอยู่ไหมคะ?</strong>
                                <h5>A: แน่นอนว่าน้องสามารถเตรียมตัวไปสอบคณะที่น้องอยากเข้าได้
                                ขึ้นอยู่กับความเพียรพยายามของน้อง ความมุ่งมั่น ความตั้งใจในการทบทวน
                                แม้จะมีเวลาไม่มาก แต่ถ้าได้รับการติวจากติวเตอร์ที่น่าเชื่อถือ มีคุณภาพ
                                มีประสบการณ์จากสถาบันของเราบวกกับการฝึกทำโจทย์ น้อง
                                ๆสามารถเข้าคณะที่ต้องการได้อย่างแน่นอนค่ะ</h5>
                            </div>
                            <br></br><br></br>
                            <div className = 'row'>
                                <strong className = 'red'>Q : แล้วถ้าลองไปสอบแล้ว สอบได้คะแนนน้อยมาก อีกสองเดือนจะสอบใหม่หนูควรทำอย่างไรดี ?</strong>
                                <h5>A : ด้วยระยะเวลาที่น้อยมาก ๆ พี่ขอแนะนำให้น้อง <strong>“เรียนพิเศษส่วนตัวเลยค่ะ”</strong>
                                เพราะเป็นการเรียนที่ได้ผลมากที่สุด เมื่อเทียบกับการเรียนในแบบอื่น ๆ
                                อีกทั้งติวเตอร์จากสถาบัน CULH มีประสบการณ์สอนติวเข้ามานาน ตั้งใจสอนจริง ดังนั้น
                                ถึงแม้เวลาจะน้อยเพียงใด ทางCULH เชื่อว่า <strong className = 'red'>น้อง ๆ
                                ทุกคนสามารถสอบติดคณะที่ฝันไว้ได้อย่างแน่นอน</strong></h5>
                            </div>
                            <div className = 'row'>
                                <div className = 'text-center paragraph header'><strong>เคล็ดลับในการสอบเข้ามหาวิทยาลัยให้ได้คะแนนดี</strong></div>
                                <br></br>
                                การอ่านหนังสือในช่วงใกล้สอบอาจเป็นเรื่องที่หนักสำหรับน้องหลายๆคน ทั้งเนื้อหา
                                ทั้งโจทย์อีกมมากมาย
                                วันนี้พี่มีเคล็ดลับดีๆที่จะทำให้น้องได้คะแนนสอบตามที่คาดหวังมาฝากน้อง ๆ กันคะ<br></br>
                                <strong>การพักผ่อน</strong> การพักผ่อนถือเป็นสิ่งสำคัญมาก ๆต่อการอ่านหนังสือ เพราะจะทำให้เราสดใส
                                มีสติ เพิ่มประสิทธิภาพในการจดจำ และสามารถเปิดรับเนื้อหาใหม่ๆได้ง่ายขึ้น
                                แน่นอนว่าช่วงใกล้สอบการพักผ่อนอาจมีไม่เยอะนักสำหรับน้องๆ
                                แต่ก็อย่าลืมพักผ่อนกันให้เพียงพอนะคะ เทคนิคง่ายๆของการพักผ่อน คือ
                                <strong className = 'red'>การพักสายตาสัก10-15 นาที
                                ระหว่างการทบทวน</strong>จะช่วยให้เราตั้งใจอ่านได้ยาวนานมากขึ้นอีกด้วยค่ะ<br></br>
                                <strong>ความตั้งใจ</strong> มีสมาธิระหว่างทบทวนเนื้อหา ในข้อนี้จะทำให้เราอ่านหนังสือได้ผลดีที่สุดเลยค่ะ
                                แม้เราจะตั้งใจอ่านได้ไม่นาน แต่ถ้าเราไม่วอกแว๊ก <strong className = 'red'>ตั้งใจอ่านอย่างมีสมาธิ</strong>
                                ก็จะทำให้เราจดจำได้อย่างแม่นยำ
                                และได้ผลดีกว่าการอ่านเป็นเวลานานแต่ไม่มีสมาธิจดจ่อกับการอ่าน<br></br>
                                <strong>หมั่นทบทวนเนื้อหาอยู่เสมอ</strong>
                                แน่นอนค่ะว่านอกจากที่เราเรียนและคิดว่าเราเข้าใจเรียบร้อยแล้ว
                                ในวันข้างหน้าเราก็อาจลืมเนื้อหาในส่วนนั้นได้ เคล็ดลับในการทบทวนง่ายๆของพี่คือการ
                                <strong className = 'red'>อ่านทวนซ้ำ การอ่านออกเสียง</strong>จะช่วยทำให้จดจำได้ง่ายและการทบทวนจะรวดเร็วยิ่งขึ้นค่ะ<br></br>
                                ทั้งหมดนี้ก็เป็นเคล็ดลับดี ๆจากพี่ๆ CULH
                                ที่ได้นำมามอบเป็นความรู้และกำลังใจในการเตรียมตัวสอบเข้ามหาวิทยาลัย
                                ยิ่งถ้าได้ติวเตอร์ที่ดี ก็จะช่วยทำให้เราเข้าใจเนื้อหาและทบทวนได้ง่ายขึ้นนะคะ
                            </div>
                            <div className = 'row'>
                                <div className = 'col-md-4 col-md-offset-4 m-yellow text-center whyus link-padding'>
                                    <a href = '/#whyus'>ทำไมต้องเรา</a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CollegeArticle;
