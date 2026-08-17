export default function Settings({theme, setTheme}) {




	
	return (
		<>
			<div className="settings-header">
				<h1>Settings</h1>
			</div>

				<div className="settings-content">


					<div className="theme-toggle">
						<label htmlFor="theme-toggle">Toggle Theme (Dark)</label>

							<input type="checkbox" id="theme-toggle" checked={theme === "dark"} 
							onChange={(event) => {
								setTheme(event.target.checked ? "dark" : "light");
							}}
							/>
						
					</div>
				</div>
			
			
		</>
	);
}

