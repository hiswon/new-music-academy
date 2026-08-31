// src/App.tsx
import { useState } from 'react'
import './App.css'

interface Course {
  id: string
  title: string
  description: string
  icon: string
  tags: string[]
}

const COURSES: Course[] = [
  {
    id: 'piano',
    title: '보컬 & 클래식 피아노',
    description: '기초 바이엘부터 체르니, 클래식 명곡 및 반주법까지 맞춤형 레슨을 제공합니다.',
    icon: '🎹',
    tags: ['취미', '입시', '성인반'],
  },
  {
    id: 'guitar',
    title: '통기타 & 일렉기타',
    description: '기본 코드 체인지부터 핑거스타일, 화려한 솔로 연주까지 빠르게 익힙니다.',
    icon: '🎸',
    tags: ['통기타', '일렉', '베이스'],
  },
  {
    id: 'vocal',
    title: '보컬 트레이닝',
    description: '올바른 발성, 호흡법, 음정 교정 및 레코딩 수업을 통한 디테일한 코칭을 진행합니다.',
    icon: '🎤',
    tags: ['발성교정', '음반녹음', '보컬'],
  },
  {
    id: 'drum',
    title: '드럼 & 드럼비트',
    description: '리듬감 향상과 스트레스 해소를 동시에! 기본 리듬 패턴부터 밴드 합주까지 다룹니다.',
    icon: '🥁',
    tags: ['스트레스해소', '리듬감', '밴드'],
  },
]

export default function App() {
  const [formData, setFormData] = useState({ name: '', phone: '', course: 'piano' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return
    setSubmitted(true)
  }

  return (
    <div className="academy-container">
      {/* 네비게이션 바 */}
      <header className="navbar">
        <div className="logo">
          <span className="logo-icon">🎵</span>
          <span className="logo-text">GET MUSIC ACADEMY</span>
        </div>
        <nav className="nav-links">
          <a href="#about">학원 소개</a>
          <a href="#courses">클래스</a>
          <a href="#features">특징</a>
          <a href="#contact" className="nav-cta">상담 신청</a>
        </nav>
      </header>

      {/* 히어로 섹션 */}
      <section className="hero-section">
        <div className="hero-badge">✨ 1:1 맞춤 프리미엄 레슨</div>
        <h1 className="hero-title">
          당신의 일상에 <br />
          <span className="gradient-text">아름다운 음악</span>을 더해보세요
        </h1>
        <p className="hero-subtitle">
          입시 전문 강사진과 최적의 연습 시설. 초보자부터 전공자까지 즐겁게 배우는 GET 음악학원입니다.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">무료 체험 레슨 신청</a>
          <a href="#courses" className="btn btn-secondary">커리큘럼 보기</a>
        </div>
      </section>

      {/* 학원 특징 요약 */}
      <section id="features" className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🎧</div>
          <h3>개인 연습실 무제한</h3>
          <p>수업 외 시간에도 최신 방음 시설을 갖춘 연습실을 자유롭게 이용할 수 있습니다.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">👨‍🏫</div>
          <h3>검증된 전문 강사진</h3>
          <p>명문대 출신 및 현역 필드 뮤지션으로 구성된 일대일 맞춤 멘토링을 제공합니다.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎙️</div>
          <h3>정기 레코딩 & 공연</h3>
          <p>분기별 스튜디오 녹음 및 소규모 콘서트를 통해 연주 실력을 완성합니다.</p>
        </div>
      </section>

      {/* 클래스 소개 */}
      <section id="courses" className="courses-section">
        <div className="section-header">
          <h2>수강 과목 안내</h2>
          <p>원하는 악기와 스타일을 맞춰 전문적으로 배워보세요</p>
        </div>
        <div className="course-grid">
          {COURSES.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="tags">
                {course.tags.map((tag, idx) => (
                  <span key={idx} className="tag">#{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 수강 문의 / 상담 신청 (CTA) */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>무료 상담 & 체험 레슨</h2>
            <p>궁금하신 점이 있다면 언제든 문의해 주세요. 친절하게 안내해 드립니다.</p>
            <ul>
              <li>📍 위치: 서울시 강남구 음악대로 123 (GET 빌딩 3층)</li>
              <li>📞 전화: 02-1234-5678</li>
              <li>⏰ 운영시간: 평일 13:00 - 22:00 / 토요일 10:00 - 18:00</li>
            </ul>
          </div>

          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="success-message">
                <h3>🎉 상담 신청이 완료되었습니다!</h3>
                <p>담당자 확인 후 빠르게 연락드리겠습니다.</p>
                <button onClick={() => setSubmitted(false)} className="btn btn-secondary">
                  다시 작성하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>상담 신청하기</h3>
                <input
                  type="text"
                  placeholder="이름"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="tel"
                  placeholder="연락처 (010-0000-0000)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                >
                  <option value="piano">피아노</option>
                  <option value="guitar">기타</option>
                  <option value="vocal">보컬</option>
                  <option value="drum">드럼</option>
                </select>
                <button type="submit" className="btn btn-primary btn-full">
                  신청하기
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="footer">
        <p>© 2026 GET MUSIC ACADEMY. All rights reserved.</p>
      </footer>
    </div>
  )
}