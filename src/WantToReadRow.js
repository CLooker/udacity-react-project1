import React from 'react';



const WantToReadRow = (props) => {
	console.log('WantToReadRow props.wantToReadBooks:', props.wantToReadBooks);

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">Want To Read
			</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{props.wantToReadBooks.map((book, index) => {
						return (
							<li key={book.title}>
								<div className="book">
									<div className="book-top" style={book.style}>
										<div className="book-cover" >
										</div>
										<div className="book-shelf-changer">
											<select>
												<option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
											</select>
										</div>
									</div>
									<div className="book-title">{book.title}</div>
									<div className="book-authors">{book.author}</div>
								</div>
							</li>
						)
					})}
				</ol>
			</div>
		</div>
	);
}

export default WantToReadRow;