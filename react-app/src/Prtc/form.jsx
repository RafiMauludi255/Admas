export default function Form() {
    return (
        <div>
            {/* Untuk menghentikan reload browser */}
            <form onSubmit={e => {
                e.preventDefault();
                alert("Submitting!")
            }}>
                <input />
                <button>Send</button>
            </form>
        </div>
    )
}

// e.stopPropagation() menghentikan event handler tersemat pada tag di atasnya untuk terpanggil

// e.preventDefault() mencegah perilaku bawaan peramban untuk beberapa event yang memilikinya