

export default function Home() {
  return (
    <div className="w-full h-[calc(100vh_-_64px)]">
		<div
			className="hero min-h-screen"
			style={{
			backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
		}}>
			<div className="hero-overlay bg-opacity-80"></div>
			<div className="hero-content text-white justify-start">
				<div className="md:w-2/3">
					<h1 className="mb-5 text-5xl font-bold">Hello there 👋</h1>
					<p className="mb-5">
						I&apos;m Ogunnubi Eniola a motivated Mechanical Engineering student with expertise in 2D drawing, 3D modeling, and product design. I specialize in creating 3D models of machine parts, mechanical components, and product designs. 
						I am highly experienced with Fusion 360, AutoCAD, and SolidWorks, and I excel at interpreting 2D engineering drawings to produce accurate 3D models.
					</p>
				</div>
			</div>
		</div>
    </div>
  );
}
