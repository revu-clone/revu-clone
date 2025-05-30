const m_commingsoon = document.getElementById("m-commingsoon");
document.getElementById("m-commingsoon").innerHTML = commingsoonComponent();

function commingsoonComponent () {
    return `
    <div class="commingsoon">
        <div class="commingsoon-left">
            <p class="commingsoon-left-title">오픈 예정 캠페인</p>
            <div class="commingsoon-left-button">            
                <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="left-header-button">
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>  미리 찜해두고 신청해보세요.</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
                  </svg>
            </div>
            <div>
                <p class="commingsoon-left-time-title">오픈까지 남은시간</p>
                <p class="commingsoon-left-time-number">00 : 00 : 00</p>
            </div>
        </div>
        <div class="commingsoon-right">
            <div class="commingsoon-right-item">
                <div class="commingsoon-right-item-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4QA-qb8aWjdxl5QrTMZ4BfHgdoTfVxIeyJw&s" alt="notice">
            </div>
            <div>
                <img src="https://www.revu.net/assets/img/media/blog_white.svg" alt="blog">
                </div>
                <p class="commingsoon-right-item-title">[경산] 만수막창 경산옥산점</p>
                <p class="commingsoon-right-item-subtitle">커플세트</p>
            </div>
        </div>
        <div class="commingsoon-right">
            <div class="commingsoon-right-item">
                <div class="commingsoon-right-item-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4HzpXFrQ6A2-vtuM7anwDkgu5kBf9Z8l6g&s" alt="notice">
            </div>
            <div>
                <img src="https://www.revu.net/assets/img/media/blog_white.svg" alt="blog">
                </div>
                <p class="commingsoon-right-item-title">[강남] 야사이마끼 쿠이신보</p>
                <p class="commingsoon-right-item-subtitle">야사이마끼 6종 + 일품요리</p>
            </div>
        </div>
        <div class="commingsoon-right">
            <div class="commingsoon-right-item">
                <div class="commingsoon-right-item-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2FF2brN8DySDym9vw5YBAK4HcjJW9RnC9TQ&s" alt="notice">
            </div>
            <div>
                <img src="https://www.revu.net/assets/img/media/blog_white.svg" alt="blog">
                </div>
                <p class="commingsoon-right-item-title">[속초] 대청마루</p>
                <p class="commingsoon-right-item-subtitle">최대 4인 이용권</p>
            </div>
        </div>
        <div class="commingsoon-right">
            <div class="commingsoon-right-item">
                <div class="commingsoon-right-item-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9yLi9d_tXcSPJ2tCioqTCxkvZUO03IGsjNw&s" alt="notice">
            </div>
            <div>
                <img src="https://www.revu.net/assets/img/media/instagram_white.svg" alt="blog">
                </div>
                <p class="commingsoon-right-item-title">[키즈텐] 키즈 종합비타민 볼탭</p>
                <p class="commingsoon-right-item-subtitle">종합비타민 1개</p>
            </div>
        </div>
        <div class="commingsoon-right">
            <div class="commingsoon-right-item">
                <div class="commingsoon-right-item-image">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPEBAPEBAPEA8QEA8QEA8QDxAQDw8PFRUWFxUVFRYYHSghGBolGxYVIjEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OFxAQGi0dHR0rKy0tKy0tLS0tLS0tLS0tLS0tKy0tKy0tLS0tKy0rLSstLS0tLS0tLSstLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgAEBQMGB//EAFEQAAEDAgMDBwQLDAgHAQAAAAEAAhEDEgQhMQVBUQYTImFxkbEVMlOBFCNSVHJ0kqGywdEWJDNCQ2KDhJOUw9IHY2RzgtPh8CU0NZXU4uMX/8QAGwEAAwEBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAA2EQACAgECBAUCBQMEAgMAAAAAAQIRAwQSITEyUQUTFCJBYXEzUoGRoSOx8BU0QuHB0QZTYv/aAAwDAQACEQMRAD8A9Qvoz88ImBEARAEQBEAEIAkoAkoACAGSAiQEQBEhkSAiVgFSAUWBIUgFICJWBEmwClYyKbAkJWMKVgRFgSErHQYSsCuvUMwIAiACgCJARAEQBEARABSAgQAVNjIEgIlYBSsCJWAYU2BEmwIlYBSsZAlYBU2BApbGFKxoIU2OiIsCQlYEhKwCiwKsr1zIEoAiYBCQBQAEAFICIAiACpsYUgAkAVIBSsZ1wuHNR4YNSssuRQjbOnS6WWonsj+p6bDbBpNHSlx3ncvPlqJt86PpsXhWnguKt/UseSKPuG9wUedPubeg035EHyTR9G3uCXnT7j9BpvyInkij7hvcPsR5s+4vQab8iJ5Jo+jb3BHmz7j9BpvyInkmj6NvcEvNn3D0On/Ig+SqPo29yPMl3D0Gm/IieSaPo29yPMl3D0On/IgHZFE/kx6skeZLuS/D9M+GxGVtbY3NtNSmSWjzmnMtHEHgtYZb4M8jXeFrFFzx8uxjLSzxqIlY6IlYBRYUUl7hiFAyIERAESAKACEgCkBEgIkMiVgEKWAUgogUtjNjkw325x4U3d5LQD3Xd64NW+KR9F4HFbJyPUrjPeIgCIAr7QbVNNww76VOrla+tTfVpjMTLGuaTlP4wQBkDDbU997N/wC34n/yUAXNm0sa184mvhKlO09Ghha1F92UG51Z4jXKN40QBpoAiACgAPbIIOhBB9aETOKcWmeGIW9nxElTZLUrJJCVgSEWBRX0JlREBREBREBQUBRAkFBlIAhIAqQoiTAimwCFLYBU2AVNgavJypbUquOjaJJ9Rn6lw6nqR9L4J+FL7iN5cMP5Cp3n+VQtPJrmep6iK+Ds3leCY5h+hPniNY4J+mkL1MRxyqHoHftG/Yj00u4vVQCOVI9A79o37EemkP1MBByvbMcy/Ix5w6+rqKXkSH6iI9PlWHZii/5bfsT9PIXqYjfdQPQO/aN+xHppC9TA5v5XNbM0X5QT0gdTA0CT08kUtRF/AlblkxgcXUXw3WHSdY0Dc0ngaDz49jW2LtgYoPIY5ltmpBkOBI8ColHa6ZopqSdHnHDM9qmz4vIvcwQiyApWFAhG4dGbK+mMgygKJKAoMoAiAHosucGzEmJguz3ZDMqJy2qy8cN8lHuXTsxwdbc38I+mTByLWh0xqdeG5c3qlV18WdT0Et1X80DEbOLGsde0h7mBphzRDhMmdER1Kk2q5Bk0MoJPdzaQuMwfNgG4npFsOaWExvbmZb1ohm3uqM8+l8pXfzXKv2+hWWpykhQwoKlsKCobChgFNhRobH/Ln+oeuLO/cj6Xwb8GX3PP0hkOwL0EU+Z2aEmKjo1qRR0DErHQ1qBktQFALUACECAUwN3klrX/AEP8RcOp60dmn6GZ539q5HI+Un1MkKXIgkJWFBhFhRkSvrTOgygKJKCox3NLuUqO0g+Ip1ocQA6zo6xMzotZYaXNHsZ/BHhT35oJpXV8f2ovrE8Wh6FUsNzdR1nMcDCicFJUyscnCW5Fupj7hTkFppuJ6DnAWQ0QCSSDkVzrBTlXydU9Tu2Xw2v47HbEbRa4tLbsqgcSWx0YiM3G4xOeSzjgau+xrl1cZNVfO+Xx/JyxeLDhDX1CCdHMY0R2gqseNxfFL+TLUZ1NUpN/dIqArRnFQVAUFS2FBCzbChgobCjR2TpiP7h/1rkzdR9J4P8Agy+5i4KmHEBxtFrjOsQ0kfOAvQbqPAqk3xL/ALBAE84I6W4E5TpnnoVl5r7GvlruP7Ea0gF4zDjIGQjP17/WjzHXBBsXc6twUxDwAY13Agmesdal5H8oez6jMwgc1pDoJ49pGnqG86oeRp0NQFrYS2SHAgGOvUgd4BKIzsaxOTSXyceZPUtTu/0nN3X+foD2OepAv9Kzd1/n6HOrRLROSdmGo0OTBHdKqNfkn51f9B/EXFqepBp+hlJwzPavObPlMi9z+4IU7iaJCNwES3AYly+1JokoCgygcXtkn2OWDo82wMmYnPTfKc5bnZ1a7U+qzPLVXX9jZr7OAGHtcAa1K8mo4Na09u5cMNQ252ul1wKyaRJY9r6lfEuYjZTGMqHVzMNTqSHS28kgkcRksI6mcpLs3R05NDjhCT+VFPn8lDZmDFXnHPcW06TL3lolxHALfPlcKSXFnFptMsu5ydKKssU8JRrNfzJqtfTYX21LS1zRrmNCspZcmNrfTvsbR02DNGXlWmlfH5K2AwvO85nHN0nVNJmNyvLl2V9Wc2n06y7uPSrLtLZjYlxJnCmuN1rpGXWuaWd3w70dmPQQq5cbjZw2th20qz6bJtbbEmTm0H61eOblG2cuswxxZXGHIqJtnKMFm2AyhsRobK0xHxd/gVy5HbPpPCPwZfcz9j0wajZAIgmDxhLxWcoaVuLrkdeiipZlas9E7DAAEsbDsxkF8nOeeMVJydP6s9tRxttJLh9DrTwd0dFkOmMhu9S2xQ1E0mpvj9WRLy037eX0KGNoNkZRrpA4L0/Cc2S5qTuu55fibWPa4rmcBhpzAcR2L2vOZ5SzTa4IHMjrQsrKxaqUZp1yLlLB3UmOAcXGpa6JMN7Ny0eV7mvofXLUPc74KrLBwjG86LZtfRAJzIBIlR5knRn503t49zO23TDXvDRABbAGmgWuJ3G2c+sblpU33O/JXzq/6D+IubU9SPP0/Qyk7U9q8pvifK5Ot/ckKbJJCLAiVgYC+7HQUBREC2hSCj0OzsQ6tSBLMIG4cMZfXDjkdOpeXmgsc+DlcuPA9jBN5cfFR9nC2WK5mjVLX0XhuGp0nc3UJItJzi3fOixgqnG01x+TbJxxTpp+2uBS2CxpeyzEFlZ9ws5kuaQJMEzByEro1TdPdC0vmzi0MI7ltnUn8VwL9V7X0qhGIaymHBlTm8LYXE7jnJXMlJSXttvlbOue2eOVTpLg6jRS2E8MqVgyo0e1PFOo+GAukQc9FpqLko2jl0LUJz2S+ODZqVcSXNcwupvIwji9zbXG+YOY3dS5tvyuHE9CWRtbW03t4tdzJ5Qf8zU/wfRaujC/YjyfEF/Xl+n9jPCps4Bgsmx0OFm2Ki/szzcT8Xf4OWE+Z9H4T+FL7lTY49sb8E+Cjxn/AGr/AEOvQ/jI9XaXNpkFnRBkOOS8TZux43Frh3PU3JSkn8nak6eb83V/m6b9F045Xs5LnyM5KrMiuRcy7zbjPZIlR4W/dkOHxSv6d8i9W564c1bzeVttkR1r2Dmn5+7+nW0pbUIvERdaL7dLk4nNqtu9Vz+TpgiTRYG1GsIqEul9pLeC2kvc7V8D6aq4tXwRZrV7+dEgtbUohsRvLZz35qFGq/UlQrb9UzI27+Ef2t8AunD0Ear/AGi+515LDpV/0H8Rc2p6kefg6WUnDM9q8WUuLPl8i9z+5FO4giNwyQluCjzsr9Bo02klFBtCCgNoZSFRf2ftIUmVKbqTarKhaSHOI83TRcubB5klJOmjqwZ/Li4uO5M7HazbKlNmHZT5xoa5zXuJjdqs/TSclKU26KeqjslGMEr+pV2fi+ZqsqgXWT0ZiZBGvrWmXHvg4mGHI8U1NK6Ojcd7VUpW5VKgfdOkHRZPF7oyvkqK857JQrqdlcKmc1FnB4o074AN7HUzO4GM/mWGSG6vobYcrxXS5om1tptc81akUw8tEEyJAA19SMOCTW2Cs38rNrsreKFuuSM7Z+J5ypXLXXMBpWQch0c49crfU4njxwtU+NnV4jo3p9NgUo7Ze6+/PgaIXnNnjUOFk2Ki9s7zcT8Wf4PWLds+h8KX9J/cr7JHTb2HwU+M/wC1f6HXofxl+p6XBMBDzaHEAQD6187oYKUZvbuaPWzSar4LFOmSelSYBxyK7cWNydTxJIylJJcJMy6tRrD0mB4zgXERojwrqnRxeJyjHY5RstP5sGkOaHtoaT03ZTHfqvZ4nE/Li4rb1FXHvY0uY2mGkGLg4+CaObPKCbgo0+5mL0Y8j7jD+HH7FrC4oMa5pHnOYZ4WmVE8bk7M8uFyakvg47UrCo9zhMEiJ1yACUIuMaZwa2DhplF9y3yY86v+g8ai5dRzR5uDpZTdqe0rwZPiz5jJ1v7gU2QFKxkRYHl7l+jnRtDcgNoZSFtDKTQbQgqWhbQypYtowKhhQwKhioYFZsKHBWbFtGgHXPtWbbXIcW48nQzWgaADsCynJvmxSlKXU7OgWLJocLJiov7P8zFfFneD1l8nv+GcMLKeCq2ODtcl0a7SvUYXBOmaafL5WTczSbtEcHfMvBj4FqI8ppfuei/EMb/4jeUh+f3/AOqr/RdT/wDYv5D1+P8AL/Y51cQHxuidV2aHQT027c7vseT4lqPOlFRi+B0djCTTPR9rADfVx7l3bH2ON5MjcXXSc61e4lxiSZMaJ7WRLfOW5rmVV1J8D1o6nMlW9/uSUWx+pzfnf7sVydkTzZJqpSb+5q8mPOrdlDxqLk1HNG2n6WU3antK+em/cz5nJ1P7gUWSRFgRFgeTuX6Yd20MoDaEFINoZSoW0IKhi2jAqWLadsPRdUdaxpceA4cTwCynJRVtjWNy4JFirgajG3FoLRq5rmPA7bSYWCyxlwTHLBOKto4Apsy2jhZSChgVlInadAVkxUO0rFiaHCyZNGhs/wDB4r4q7wqKFzPd8OVYH9zOYvUMzqEihpQBJQAUgCgAygZEqADkwNTkx51b9B41FyajmdWn6WVH6ntK+bm/cz5rJ1P7gU2SRFgRKxnj5X6jR6m0MooNoZSE4hlInaG5Q0G0YFQ0Labmx2i2g2JbVxNtUbnNaGlrT1ZkwvP1D90vouB04kqS7viW6dJjOadRzFbEWxqebIAfTd2Ge8FYOUpWp/C/xlbEq2/LMOpAc4DQOIB6pyXSrpWcMoq+AQVEiNowWUhNHRpWLFtOjVkydo4WLFRobP8AwWL+LO8KimPM9nQL+iyhRbJA4kDvXpvgrM1xZ6xvJ6lGtT5Q+xcfqJHb5ESocDh4JivAEnT87+U9m9Lz5B5ERauEwrdTV1A1HXnnuy+ccUefIfkRKW1cIKNS1pJaWhwnXOd+/RdGKblG2c2SCjKkbVPYFKBJeTGZuAz7lg88joWCNDeQaXF/yh9iXqJD8iJTq4Gg0uBFbozJBbGUZz6+8FHnyDyImftPDNplhZdbUYHgO85s7it8U3NOzmzQUGqLXJnzq36v41FjqepG+n6WVX6ntK+Zn1M+bn1P7iqSSIAKAPFXL9Uo9zaGUULaGUqFtGBU0G0MqWhbRgVDQtpbwWONKRAcx0XMdMEjQgjMEcQufLiU+PJji9pYG0Q1pFKmKZMy4vc9wBEG2chI36rB4W373f8AA91clRUBVtGDR0aVjInadAVjIlocFZMTR0aViyGh2lYsmjS2f+BxfxZ3hUUx5o9fRcMLKGEPTZ8NviF6culmMOaPoa8w9QzMdQFJrjTpgl5dfk5xMtPD/e7egCq4VenFNosIOQeJi8kiNeln6wgClyj/AA7f7tni5deDoZyZ+pHqQuQ6lyOWLc4N6AkyJHUgZSqMqOLvawdMyACRrxG8N/00QBkbf/IZR7SMoiOqNy6tPyZyajmhuS/nVv1fxqKdTzRen6WV36ntK+Xn1M+dydb+4qmyCIsCIA8PK/Vz6LaSUBtDKTDaEFKidowcoFsGBUMlwGBWbQnAcFZyJ2jgrJonadGlZSRLidGlYyRLidAVjIlxOgKxaI2jtKxkS4mpgPwGL+LP8KimPNHqaT8Iz8Iemz4bfEL05dLOeHUi5snHPfWxbn1qp5vHYukG3utDAWBoidwGXaV5e3jZ68Xwo9LTrFudxjLUz4rfYjby0+SO79qUxvJ6gD9alYZMlabI/g85tvEipVDgCBY0ZxOp+1dOODjFpnBq4PHNJj7cpOfWMVi0EsaGtqOEG3QwDGc968ycdzdM6oZYpJM5bGZVwtW+pVD6T5YQXvNsmQcxmco9aUYuL4s0d5OEF9z1Lsawb57ASt9rOCWrxR+TznKPEB72EAiGHXtXXp1SZzTzxy8V8DclD0q/Zh/Gos9T1I6dP0s4v1PaV8tPqZ8/kXvf3FUsiiICiICjwcr9ZPqdoZToW0kpULaNKkW0aVAtowKmhOJ0pAuIa0EkmAAJJPUs5tJWydp1fTc0uaWkOb5wjNvb3hY7k0mnzJcRqLS4wNYc71NEn5gVnNpK2TtGG4xkZg7jGqykQ4nWmCSANSQB2lYypE7SxiMO6kYcIkAg7iOpYWmRKDQGlZtENDgrFomjVwB+98X8Wf4VFmupHoab8JmVRfBB4EFeq1wOXG0mmybOomk7EE1Gv57FVcQDmCBUgwctZBXE8Dvgexvx81JGnh8QBNzhG4Zn6lpjg48zfBnxQ5yR39lM90O4rY6PWYPzIp4moHOkaQBPFB4uuyxyZLg/gsPqMeX3OFr8+LpkHQ9cn1rzPSyU21yZy48+3qTL1TGUTAkZGRI0yIy71qsMuw9RqZTjUE1ZPZtP3Y7ir2S7Hm+XPsZm1MQ17haZAETG9b4YtczoxRcVTL3JM9Kv+r/SqLHVdR6Om6WcXnM9p8V8vPqZ4ORe5/cgKggCVCIigPAyv1s+v2hlAUd8FUY2o11RpewXS0GJMGPnhZZozlFqDpi2ltmPZDA6k14bScyCADeS6DdqQAR689wXM9PPi1Krf8A4nWntVrbCKTS5poEvcGuMU2NaWgEGJLTn19kQ9LJt3Lhx4fcW0antcC6abXAmhDXgOAsaA507z0REyMys/RtUt3cmjhXxTX1GvtLWi0EQCcjnlotIYnCDjzJo1BjmuqMl9Qh9J5Jq1qZa1xJIaZYQ0SxvZI4LjeJqD4Lg/hf9hRVwmM5quXgyCSCWOOTXEXQYE5TwzVzxueNLkRVD45xLKPSY5tpzY1rQ1xglkDKQLfWTwWUFxfchotjFMcHubzbOhZa+b2t6YAbroAyYGZcZKwlBrgxUqBtIyyi/I3sJdDWtzuIkwfVn7ntWcVxaIyK0U2uQ0YOJ1aVi0S4mvgT964z4vU8Kiy/5I7cPDF+5jUBcQBqSAO0r1XwRwLi6PXN5LNgTVdO+GiJXD6p9ju9Mu4tbk9SZm6s4DrAS9U+welXc5eSKEE+yHZcWxx046HuR6l9h+lj3M3aWEFF4aHXNLWva6INp49y3xz3qznyY9jo2qXJoQJqmYEw0RPUsXqX2N1plXM5HY9HP28iHFp6I84CSO5L1L7D9Mu4XbDpDWs7W3zZzz+w9yPUvsHpl3MnbWA9jlsOva9tzSRB/3oujDk3pnNmx7GW+R7ulX/VvpVFz6vqR0aXjFnOp5x7T4r5ia9zPCydT+4FBAZQBJQB4CV+tn2W0kpBtHptJmATaC4wCYaNSerrUyaXN1Ymg2kAOIIDptJBh0awd8JWm2k+KFRJSYqDKli2nbmnAuaWuuYCXttMsA1Lhu1Cxco0nap8iWgAqWiWhwVmyWi3WwdWmAalKqwEwC+m9oJ4SQsN8ZP2tMloVrTF0G2bboNt0TE8YUS7EbTs7EPcA0vcWt81pcS1vYFg4JPkQ0RpWbRm4nRrli0Q4m1gz954w/wBnqeD1zvrR04+GMxcC72yn8NniF6s17WefDqR9AqvfTq3OJNNxgQcgN2S+Qyzy4M2+b9jPfiozjS5lio1lcRJ6JnKJGR49RXfg1GPOm4PkZSi48zLeaQbU9ruLXWxeScrukMo0g793BbkmZykEVWASAKFMQczq7Vdmn6WcWo6kevuDWyTAAkngFxs7UrpIyn1aLmFzBMOEg9GJB3OBy13JWjSeOUOo41sVTtqt5sBgLA4ipaDrmDHHhxKZmZnLN2dDd7W7Lhou3ScmcOrfFCcijL8R+q/SqKNXzRek6WCoek7tPivmpr3M8XJ1P7gBUURQZSoREgPn0r9bPt9oZQKjW5N4zmalWpLZbhq1ofFrnZQ2N88Fw67G8kIx/wD0iZRNvBjDPFKOY5oS8U6paXsbUqDnG9J7bbYOeZItI3rzJ+fCUud8rX0XD4+TNpi4l2Fpue1lLCvFMYWxxNxeXuLakm7pQ2DG7VVH1Ekm5SV7v45AkzntqhhW0agoim4Am14qMvFTnSCPOucLd1sRnKemnnlkXmX9q4VX7CphwW0GVKeGbWdTmo99PEOJtfUp0hNFtQ+5uIBO8DqRkwSjObgnwpr9edCcTsMJQeGAjCsrh+HdXa2qwUm076l4aS6M22SAeCy8zMr6nGnXDjZNGfyjfSDhToMpBoYHF9M3Oc4g5EzEaZLbTRm4OU277MNp6LF1KT31wX0Gsq1aRDnYgVmVoMwaYcLB1yNF58YySi0nav4qv1+SKIW0bGMaMKbqtJ9Zj6jGtYLXNe5oD4BgDQnqS99tu/oKjL2lToNpCrTAmtDGNz6ApOIe8fChne5aw8xy2v4/8kOKMlpWjiZNHQOWTRDRt4M/eOMP9nq+D1ySX9RG0eGNmDgXe2U/7xn0gvUn0s8yHUj6Bj3vql0GxjHWgETc4au6hmvmdbpfUY9t0e5jntdh2VVFMua45nMuPdmpxYsWixNylS+WxzlLIy7WxdIiD0xwtkfOuTJ49oocpX9kNYJnleUuID6wIBA5toz7XL2fCNbDWYXkgmldcTz9XBwmkzc2viHgOaBLLADAGc669q4ZZp+pUP8AideSTx4XkjzRl7F5xlVrnS2lJa4zE5OgEdplepsisf1Gpy1EVmbrhyPQv2jTHE9gP1rER5Llliw99IgEQ1wz7Qu/R8mcGr5obkK6X4jswv0qiz1nUjTSdLJVPSd8I+K+cmvczx8i9z+4JUURQZSoKJKKCj59K/WD7igygKCCkJoMpC2jtaToCY4CVLaXNipBtIzg9sKNyfCyWNTaTkASToACSVDaXMVDAbo6ojepbRND2kCYIB0MGCs203VktDAHgctctFDohocFZtEuJ2fXc625xNrQ1smbWjQDgFjsS5IhogKzaIcTo1yycTNxN7CH/h+NP9RV+i5cM/xEV/wZ5jDVbXNPBzT3FelmT8uVc6Z5MJVJNnuxi4uh4ex5L5uaSCdddQvhtB4nNR8vUxkpJ1e1/wAn0E4x5xap/UelUaJNzQT+cNFyeM+IPNj8nDFtPm9r/g0wxSdtr9x+db7pveF8t6fN+R/szp3x7owNt1gauRBhrQYMwZOS/Rf/AIrhnj0b3pq2+Z4niEk8vB/BoYjaJt6Dg+bSCS08NZKc9LqPV7lH2G+XJF6ZqD9xUwuIe6rc91rTJcLqYYTGWQMyvabXlUlx+xtpssI6NQnW80/ZDPds+W1cmyXYx3x7nnuUuIa57A1wda0zBBAk5L0NHBpNs4NXNOSo0P6PzL8T2YX6VVY63qRpo+ljVj0nfCd4r5+a4s8ua9zFlRRNBlKhUFKgPn8r9WPuaDKAoiQUEFIVF3Z2N5kkkEh0B0GDbOeoI+vrGc82fD5q58iGizXx7HUbAX3cIFgF8mDroB6+pc8cE45N3Cv+idp1pbUaYLgZAcOldVEQ0CekJyGfXnloIlppLk/2pf8AsTQlHaNr3EtMPqNfIloIBzJaSZ4gTkUT0+6Cp8kTRZO0mc1Sa0PupljiI6IgGSM+vXrOhWPp5b22+DJoWjtVrTUNrum1rZiS0NBAzJnQnU8E5aZuuPL/ADsKjPBW1E0MCs2iWhw5ZtENHQOWbiQ0ehwv/TMaf6iv9Fy83L+Mv0InwgzxrHr16PELFFt2gHrIHis5JItFjmSBJDYy/GafAqPaVTHbTPBufW37UXENrOhpuG4fKb9qLQ9rAabuA72o3C2sV1J35vy2dvFG5BtZyq03AEkCBwc0+BVKSYnBoquetCD1n9HLpfiezC/SqrzNd1I9HRdLHrHpu+E7xXhyjxPPmvcxZUUQ0SUqFQ0pUKjwK/UT7oKAokoCi1gMQ2m6XNLpLRMxaA4Okdchvqkb5HPnxSmva6oiSfwaD9qMLAIggxDAWm28OMEkwSGtzmddFyLSz3fT6/b/ADgRsYg2k3naVSCLWFpPSmZcRv6xnB1ORT9NJY5Q7sNjoc7RpxVho6Qc1gtjI0wwbu0ZFsDODMKFpsi2/Tnx+t/5zIUGjptHaNJ76LmAwxxLiQ47xmBlOk+oJYdPkjGSk+YlF/J3wG1qbbrwPMa1pY1zRILzpui75zmssmlm6oTi/g4+VWlrAaQJZzUCYBta8ajdLhrO9N6WVunzE40dau0qZuyf0hAgDLouGfSAObhkRGXWpjp5oVGWCuholoYOWbRDR0aVm0S0ex5OYIYjBVqJJaKoqUy4RIDgRIleRqvbltGUo2mit/8An498u/Yj+ZUtdk7I5PRY+7COQQ98n9iP50PXZOyD0UO7H+4Ue+T+xH86XrcnZB6OHdh+4Ye+T+xH86PW5OyH6OHdkPIfhie+h/7o9bk7IPRw7sX7hT76H7v/APRHrMnZB6OHdinkI730P3Y/5ifrZ9kL0UO7FPIF3vtv7sf81Hrp9kL0UO7FP9H7vfbf3U/5qfrp9kHood2bXJfk37BNVxrc6avNDKlzYaGF35zp875lhmzPK038HRixLGmkYdd3Tf8ACd4rz5R4nlzXuYsqXEigyp2k0GUtoUeGX6YfcEQBECAgAgoEwypoQQkwGBUksYFS0RQQVNCaHBWbRLQwKhomhgVDRLQ7XKGiGj3/ACEcDQcN4eZXh62LWVmM1TPSrkJIgCIAiAIgCIAiACgCIAhyzQDPnlV8uceLnHvKhxPLkuLAHKXEzaGuUuItpJS2hR4tfop9mRAEQBEARAEQKghSKgpUKggqWhUOCpaJoIKholoYFS0S0MCoaJocOUtE0a/J3bZwlQmLqbsnt39oXFq9L5q4czOcL5HvMNyhw1QAiswdTjaR6ivHlp8keaMGmix5Ww/pqXy2rPyp9mInlah6an8tqPLl2APlSh6an8sJbJdgJ5UoempfLajZLsARtKj6Wn8tqNr7CsbyhS9LT+W37Utr7BaCMfS9Iz5TftRtfYLRPZ1L0jPlBFMLRjbc28yw06TrnOBBcNGjfnxVKDMsk+FI8sHJuJyUNco2k0G5LaKg3JbQo8gvvj68CAIgCIACBBQBEAFIRAVNEjAqWhUMCpaFQwKloloIKlomhgVDRLQ7VLJoYA8D3FZtolobqU0S0MCoaJaHaoaJaGBUOJDQ4cs3EhxGBWbRNHQtI1BHCQRKjgyWggqGiHEcOUNENBDlDiTQwcpcSWhgVO0VBuS2hR5Zfbn1YExgQIiAIgAIAiBBQBEhUEJCCCpEMCpaFQ0qaJoMqaJaNLZWPFEOlziHOpjmwTaWFwNRxGhNrbf8XUuTUYHkapd+P9jOUTXp7XEFgqseQOlUqGqznLnvmOMNc0ZjdlouB6WV20/0oycDMxWKpv5w2gPcXGQ1oEmoDkRr0erKOtdUMU41x4f9FJHVuLotMGmwgmZaC6B0YHSjgVn5eR/L/UTiPiMVRNsMZk5s2tztF8yCBOo/2FMceTjbJpnUYqhbFrCbKckthxcJuiBlu79cln5eWyKE9k0ZaSwRqQwMJE5wQ5oGUx6kPHMTQaWLa0VW/iuq03tYJDSGuM6DLKFMsUnRFF7bmNpvLCIeQ95cWxJblnGYz4HMR1rDFjkrsTRxp4qibjawS0xLPxiSeuIiBB370OEiKOmFxFAkXNaB05uZIOYtyHVl6id6ThImjPqOFzo0uMdk5J7SGgBylxJoYOScRUG5LaKjza+wPqAIAiYAQBEARAiIAiAAgQUhBSoKGlKhElTQqGBUtEsMqaJoYFJoTQQVDRLQ4KlomhgVDRLQwKlomhgVDRLQ4KzaJaGBUNEtDAqGiGhgVDRNDByhoihwVLiJoMqdpNEuSoVGAvqz6QiAAgQExkQBEARAAQIiAIgApCCCkIiVCDKQhgVNCY0qWiQgqaE0NKloihgVLRLQQVFCHBUtEtDtKzaJaGBUtE0MCoaIoMrNxJaHBUNE0MCpaJaCHKaFQbkqFRhlfTn0DIgQEDIUwAgCIAhQBEARAgIAKAIkSFJgEKSQhJgMFJLCkIYKGSMpZAQpJHChgMFDIGChkjhQyQqWSxgs2SxgpZDCFAgpAf/Z" alt="notice">
            </div>
            <div>
                <img src="https://www.revu.net/assets/img/media/instagram_white.svg" alt="blog">
                </div>
                <p class="commingsoon-right-item-title">[넴유베] 작명 어플 넴유베</p>
                <p class="commingsoon-right-item-subtitle">쿠폰 1매</p>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="commingsoon-right-item-icon">
  <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
</svg>

    </div>
    `;
}

const m_brand = document.getElementById("m_brand");
document.getElementById("m-brand").innerHTML = brandComponent();

function brandComponent () {
    return `
    <div class="m-brand">
    <div class="m-brand-title">
    <p>브랜드 존</p>
    </div>
    <div class="m-brand-notice">
        <div class="m-brand-notice-item">
        <img src="https://files.weble.net/brand-zone/82/card_inus_aa70b1581460f07ce3745501f20f7bc2.png" alt="notice">
        <div class="overlay-content">
            <h3>인어스H&L</h3>
            <a href="#" class="overlay-button">
                <span>캠페인</span>
                <span>→</span>
            </a>
        </div>
    </div>
    <div class="m-brand-notice-item">
        <img src="https://files.weble.net/brand-zone/81/card_frombio_b60090bf6fce8570161a63751f1a9123.png" alt="notice">
        <div class="overlay-content">
            <h3>프롬바이오</h3>
            <a href="#" class="overlay-button">
                <span>캠페인</span>
                <span>→</span>
            </a>
        </div>
    </div>
    <div class="m-brand-notice-item">
        <img src="https://files.weble.net/brand-zone/76/card_butfitground_a03a6d13b215811e71b09b3545e29630.png" alt="notice">
        <div class="overlay-content">
            <h3>버핏그라운드</h3>
            <a href="#" class="overlay-button">
                <span>캠페인</span>
                <span>→</span>
            </a>
        </div>
    </div>
    <div class="m-brand-notice-item">
        <img src="https://files.weble.net/brand-zone/75/card_winkfamily_77c41f39227b2e0c84f964a412710076.png" alt="notice">
        <div class="overlay-content">
            <h3>윙크패밀리</h3>
            <a href="#" class="overlay-button">
                <span>캠페인</span>
                <span>→</span>
            </a>
        </div>
    </div>

    </div>
</div>`;
}

const m_best = document.getElementById("m-best");
document.getElementById("m-best").innerHTML = bestComponent();

function bestComponent () {
    return `
   <div class="m-best">
    <div class="m-best-title">
    <p>베스트 콘텐츠</p>
</div>
<div class="m-best-contents">
    <div class="m-best-contents-item">
    <img src="https://files.weble.net/best-contents/670/%EC%83%81%ED%92%88%EC%9D%B8%EC%8A%A4%ED%83%801_fbffd824c17b9c81d6e4341b1c31e3fe.jpg" alt="contents">
   <div class="m-best-contents-item-section">
    <p class="m-best-contents-item-text1">한국의 미를 담은 단아한 컬러감</p>
    <p class="m-best-contents-item-text2">[한국도자기]사색 신제품 2종</p>
   <div class="m-best-contents-item-icon">
    <img src="https://www.revu.net/assets/img/media/instagram.svg" alt="instagram">
    <div class="m-best-contents-item-profile">
        <img src="data:image/jpeg;base64,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" alt="profile">
        <p>민블리리리리</p>
    </div>
   </div>
</div>
</div>
<div class="m-best-contents-item">
    <img src="https://files.weble.net/best-contents/669/%EC%A7%80%EC%97%AD%EB%B8%94%EB%A1%9C%EA%B7%B82_cae2bc5250197fa127b4f13ab30be31c.jpg" alt="contents">
   <div class="m-best-contents-item-section">
    <p class="m-best-contents-item-text1">5월, 고마운 마음을 전하세요</p>
    <p class="m-best-contents-item-text2">[마곡]온도플라워</p>
   <div class="m-best-contents-item-icon">
    <img src="https://www.revu.net/assets/img/media/blog.svg" alt="instagram">
    <div class="m-best-contents-item-profile">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6CfZiIAlN0bwuIXixvsCuMFCThS7iDgVLg&s" alt="profile">
        <p>준이랑찬이랑</p>
    </div>
   </div>
</div>
</div>
<div class="m-best-contents-item">
    <img src="https://files.weble.net/best-contents/668/%EC%A7%80%EC%97%AD%EB%B8%94%EB%A1%9C%EA%B7%B81_df843313d5cb1f3ec0aaa7ca90359439.jpg" alt="contents">
   <div class="m-best-contents-item-section">
    <p class="m-best-contents-item-text1">소중한날 나만의 맞춤 레터링 케이크</p>
    <p class="m-best-contents-item-text2">[성북]플라씨케이크</p>
   <div class="m-best-contents-item-icon">
    <img src="https://www.revu.net/assets/img/media/blog.svg" alt="instagram">
    <div class="m-best-contents-item-profile">
        <img src="https://www.revu.net/assets/img/user/avatar.svg" alt="profile">
        <p>샐리의여행일기</p>
    </div>
   </div>
</div>
</div>
<div class="m-best-contents-item">
    <img src="https://files.weble.net/best-contents/667/%EC%A7%80%EC%97%AD%EC%9D%B8%EC%8A%A4%ED%83%801_3f504c20246fdd819a0385b35a833acc.jpg" alt="contents">
   <div class="m-best-contents-item-section">
    <p class="m-best-contents-item-text1">어린이가 행복한 카라반캠핑</p>
    <p class="m-best-contents-item-text2">[포항]TITF카라반</p>
   <div class="m-best-contents-item-icon">
    <img src="https://www.revu.net/assets/img/media/instagram.svg" alt="instagram">
    <div class="m-best-contents-item-profile">
        <img src="https://www.revu.net/assets/img/user/avatar.svg" alt="profile">
        <p>꼬꼬마어린이1</p>
    </div>
   </div>
</div>
</div>
<div class="m-best-contents-item">
    <img src="https://files.weble.net/best-contents/666/%EC%A7%80%EC%97%AD%EC%9C%A0%ED%8A%9C%EB%B8%8C_775a304e6fd0645d48d33f6394f12bc1.jpg" alt="contents">
   <div class="m-best-contents-item-section">
    <p class="m-best-contents-item-text1">화덕에서 구운 정통 이탈리아 피자</p>
    <p class="m-best-contents-item-text2">[판교]이탈리아 판교점_영상&쇼츠</p>
   <div class="m-best-contents-item-icon">
    <img src="https://www.revu.net/assets/img/media/youtube.svg" alt="instagram">
    <div class="m-best-contents-item-profile">
        <img src="https://www.revu.net/assets/img/user/avatar.svg" alt="profile">
        <p>마로언니</p>
    </div>
   </div>
</div>
</div>


</div>

</div> 
    `;
}

const m_campaign = document.getElementById("m-campaign");
document.getElementById("m-campaign").innerHTML = campaignComponent();

function campaignComponent () {
    return `
    <div class="m-campaign-section">
    <img src="https://www.revu.net/assets/img/top-banner/ad-banner-main-img-bottom.png" alt="campaign">
    </div>
    `;
}

const m_bottom_footer = document.getElementById("m-bottom-footer");
document.getElementById("m-bottom-footer").innerHTML = bottomFooterComponent();

function bottomFooterComponent () {
    return `
   <div class="m-bottom-section">
        <div class="m-bottom-section-left">
            <div class="m-bottom-section-left-text">
            <img src="https://www.revu.net/assets/img/logo/logo-revucorp-g.svg" alt="logo">
            <p>레뷰코퍼레이션 | 대표이사 : 송인상 | 개인정보 보호 최고책임자 : 이무승</p>
            <p>사업자등록번호 : 261-81-22044 | 통신판매업신고번호 제2016-서울강남-01523호</p>
            <p>주소 : 서울특별시 강남구 논현로 135길 29 (논현동)</p>
            <p>메일 : help@revu.net | 전화 : 1544-9851 | 팩스 : 02-877-7995</p>
        </div>
            <p class="m-bottom-section-left-text2">© REVU Corporation. All Rights Reserved.</p>
        </div>
        <div class="m-bottom-section-right">
            <div class="m-bottom-section-right-text-section">
                <p class="m-bottom-section-right-text-number">1544-9851</p>
                <p class="m-bottom-section-left-text">월-금 9:00-18:00 / 주말, 공휴일 휴무</p>
            </div>
            <div class="m-bottom-section-right-sns">
                <img src="https://www.revu.net/assets/img/footer/sns/ic-footer-kakaotalk.svg" alt="kakaotalk">
                <img src="https://www.revu.net/assets/img/footer/sns/ic-footer-blog.svg" alt="blog">
                <img src="https://www.revu.net/assets/img/footer/sns/ic-footer-insta.svg" alt="instagram">
                <img src="https://www.revu.net/assets/img/footer/sns/ic-footer-fb.svg" alt="facebook">
            </div>
        </div>
    </div>
    `;
}

const last_footer = document.getElementById("last-footer-component");
document.getElementById("last-footer-component").innerHTML = lastFooterComponent();

function lastFooterComponent () {
    return `
    <div class="m-last-footer">
        <div class="m-last-footer-left">
            <p>레뷰소개</p>
            <p>이용약관</p>
            <p class="m-last-footer-left-number">개인정보처리방침</p>
            <p>위치기반서비스이용약관</p>
            <p>운영정책 | </p>
            <p>Influencer <p class="m-last-footer-left-number">1,300,677</p></p>
            <p>Campaign <p class="m-last-footer-left-number">1,088,338</p></p>
            <p>Contents <p class="m-last-footer-left-number">9,481,361</p></p>
        </div>
        <div class="m-last-footer-right">
            <button class="m-last-footer-button1">
                대한민국
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
                  </svg>
                  
            </button>
            <button class="m-last-footer-button2">광고문의</button>
        </div>
    </div>
    `;
}