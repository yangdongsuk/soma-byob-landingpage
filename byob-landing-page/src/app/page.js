import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>주정뱅이 - 최고의 BYOB 모임 플랫폼</title>
        <meta name="description" content="주류 모임 통합 관리 서비스" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-black">주정뱅이</div>
            <nav>
              <a
                href="#features"
                className="text-black mx-4 hover:text-gray-600"
              >
                기능 소개
              </a>
              <a href="#cta" className="text-black mx-4 hover:text-gray-600">
                모임 찾기
              </a>
              <a href="#faq" className="text-black mx-4 hover:text-gray-600">
                FAQ
              </a>
              <a
                href="#contact"
                className="text-black mx-4 hover:text-gray-600"
              >
                연락처
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-white">
            주정뱅이 - 최고의 BYOB 모임 플랫폼
          </h1>
          <p className="mt-4 text-white">
            원하는 조건의 모임을 쉽고 빠르게 찾아보세요
          </p>
          <a
            href="#cta"
            className="mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            모임 찾기
          </a>
        </section>

        <section id="pain-point" className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mt-8">
            원하는 주류 모임을 찾기 힘드셨죠?
          </h2>
          <Image
            src="/sad-man.png"
            alt="술 모임을 찾지 못해 슬퍼하는 남성"
            width={500}
            height={500}
            className="mx-auto"
          />
          <p className="mt-4 text-white">이제 주정뱅이에서 쉽게 찾아보세요!</p>
        </section>

        <section id="features" className="mt-16">
          <h2 className="text-2xl font-bold text-white">
            주정뱅이의 주요 기능
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-black">
                모임 검색 및 필터링
              </h3>
              <p className="mt-4 text-black">
                원하는 지역, 일정, 가격대의 모임을 쉽게 찾을 수 있습니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-black">
                사용자들의 히스토리 제공
              </h3>
              <p className="mt-4 text-black">
                함께 모임에 참석하게 될 사용자들의 모임 참여 내역을 알 수
                있습니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-black">
                신뢰할 수 있는 모임{" "}
              </h3>
              <p className="mt-4 text-black">
                노쇼, 먹튀 방지! 믿을 수 있는 모임을 보장합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-black">공간 대여 서비스</h3>
              <p className="mt-4 text-black">
                제휴된 바에서 프라이빗한 공간을 예약하세요.
              </p>
            </div>
          </div>
        </section>

        <section id="cta" className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white">
            지금 바로 주정뱅이를 시작해보세요!
          </h2>
          <a
            href="#"
            className="mt-8 inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            가입하기
          </a>
        </section>
        <section id="cta" className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white">
            원하시는 기능이 있으신가요?
          </h2>
          <a
            href="#"
            className="mt-8 inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            설문조사
          </a>
        </section>
      </main>

      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center text-white">
          <div className="text-lg font-bold">주정뱅이</div>
          <nav className="mt-4">
            <a href="#" className="text-gray-400 mx-2 hover:text-white">
              개인정보처리방침
            </a>
            <a href="#" className="text-gray-400 mx-2 hover:text-white">
              이용약관
            </a>
            <a href="#" className="text-gray-400 mx-2 hover:text-white">
              연락처
            </a>
          </nav>
          <div className="mt-4">
            <a href="#" className="text-gray-400 mx-2 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 mx-2 hover:text-white">
              Instagram
            </a>
            <a href="#" className="text-gray-400 mx-2 hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
