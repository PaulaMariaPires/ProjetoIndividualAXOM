// Script para o quiz
var pontos = 0;

function escolha() {

    var selecao = orionSelect.value;
    console.log("selecao", selecao);
    if (selecao == 'orion') {
        pontos += 10;
        conteiner.style.display = "block";
        conteiner.innerHTML = `        
        <div class="questionario">
            <h1>Qual o nome do robô na imagem abaixo?</h1>
                <div class="questao">
                    <div class="imagem">
                        <img src="Imagens/mars-g21336a0c6_1920.jpg" alt="constelação">
                    </div>
                </div>
            </div>
            
            <div class="selecaoDois" style="display: block;">
                <select id="roboSelect">
            <option value="rover">Robô Rover</option>
            <option value="falcon">Falcon X</option>
            <option value="jupiter">Jupiter</option>
            <option value="hori">Horizon</option>
        </select>
        <button onclick="escolha2()">Ver Resposta</button>
    </div>
</div>`
    }
    else if (selecao != "orion") {
        conteiner.style.display = "block";
        conteiner.innerHTML = `        
        <div class="questionario">
            <h1>Qual o nome do robô na imagem abaixo?</h1>
                <div class="questao">
                    <div class="imagem">
                        <img src="Imagens/mars-g21336a0c6_1920.jpg" alt="constelação">
                    </div>
                </div>
            </div>

            <div class="selecaoDois" style="display: block;">
        <select id="roboSelect">
            <option value="rover">Robô Rover</option>
            <option value="falcon">Falcon X</option>
            <option value="jupiter">Jupiter</option>
            <option value="hori">Horizon</option>
        </select>

        <button onclick="escolha2()">Ver Resposta</button>
    </div>
    </div>`

    }
}

function escolha2() {
    var selecaoDois = roboSelect.value;
    console.log("Dois", roboSelect.value);
    if (selecaoDois == 'rover') {
        pontos += 10;

        conteiner.style.display = "block";
        conteiner.innerHTML = `        
        <div class="questionario">
            <h1>Qual o nome do foguete lançado pela SpaceX em 2016?</h1>
                <div class="questao">
                    <div class="imagem">
                    <img src="Imagens/fh.webp" alt="constelação">
                </div>
                </div>
            </div>

            <div class="selecao3" style="display: block;">
            <select id="spaceSelect">
                <option value="falconh">Falcon Heavy</option>
                <option value="saturno">Satuno V</option>
                <option value="falcon6">Falcon 6</option>
                <option value="origin">Origin</option>
            </select>

            <button onclick="escolha3()">Ver Resposta</button>
        </div>`
    } else if (selecaoDois != "rover") {
        conteiner.style.display = "block";
        conteiner.innerHTML = `        
        <div class="questionario">
            <h1>Qual o nome do foguete lançado pela SpaceX em 2016?</h1>
                <div class="questao">
                    <div class="imagem">
                    <img src="Imagens/fh.webp" alt="constelação">
                </div>
                </div>
            </div>

            <div class="selecao3" style="display: block;">
            <select id="spaceSelect">
                <option value="falconh">Falcon Heavy</option>
                <option value="falcon6">Falcon 6</option>
                <option value="saturno">Saturno V</option>
                <option value="origin">Origin</option>
            </select>

            <button onclick="escolha3()">Ver Resposta</button>
        </div>`

    }
}

function escolha3() {

    var selecao3 = spaceSelect.value;
    console.log("selecao3", selecao3);
    if (selecao3 == 'falconh') {
        pontos += 10;
        conteiner.style.display = "block";
        conteiner.innerHTML = `        
        <div class="questionario">
            <h1>Qual o ano que foi feito a primeria fotografia de um buraco negro?</h1>
        <div class="questao">
        <div class="imagem">
            <img src="Imagens/bn.jpg" alt="constelação">
        </div>
        </div>
        </div>

        <div class="selecao4" style="display: block;">
            <select id="blackhSelect">
                <option value="2021">2021</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2022">2022</option>
            </select>
            <button onclick="escolha4()">Ver Resposta</button>
        </div>`
    }
    else if (selecao3 != 'falconh') {
        conteiner.style.display = "block";
        conteiner.innerHTML = `        
        <div class="questionario">
            <h1>Qual o ano que foi feito a primeria fotografia de um buraco negro?</h1>
        <div class="questao">
        <div class="imagem">
        <img src="Imagens/bn.jpg" alt="constelação">
        </div>
        </div>
        </div>

        <div class="selecao4" style="display: block;">
            <select id="blackhSelect">
                <option value="2021">2021</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2022">2022</option>
            </select>

            <button onclick="escolha4()">Ver Resposta</button>
        </div>`
    }
}

function escolha4() {

    var selecao4 = blackhSelect.value;
    console.log("selecao4", selecao4);

    if (selecao4 == '2019') {
        pontos += 10;

        conteiner.style.display = "block";
        conteiner.innerHTML = `        
        <div class="questionario">
            <h1>Qual o nome do foguete lançado pela SpaceX em 2016?</h1>
                <div class="questao">
                    <div class="imagem">
                    <img src="Imagens/fh.webp" alt="constelação">
                </div>
                </div>
            </div>

            <div class="selecao5" style="display: block;">
            <select id="neilSelect">
                <option value="neil">Neil Armastrong</option>
                <option value="buzz">Buzz Aldrin</option>
                <option value="yuri">Yuri Gagarin</option>
                <option value="harry">Harry Olsen</option>
            </select>
            <button onclick="escolha5()">Ver Resposta</button>
        </div>`
    } else if (selecao4 != '2019') {
        conteiner.style.display = "block";
        conteiner.innerHTML = `        
        <div class="questionario">
            <h1>Qual o nome do foguete lançado pela SpaceX em 2016?</h1>
                <div class="questao">
                    <div class="imagem">
                    <img src="Imagens/fh.webp" alt="constelação">
                </div>
                </div>
            </div>

            <div class="selecao5" style="display: block;">
            <select id="neilSelect">
                <option value="neil">Neil Armastrong</option>
                <option value="buzz">Buzz Aldrin</option>
                <option value="yuri">Yuri Gagarin</option>
                <option value="harry">Harry Olsen</option>
            </select>
            <button onclick="escolha5()">Ver Resposta</button>
        </div>`

    }
}


function escolha5() {
    var selecao5 = neilSelect.value;
    console.log("selecao5", selecao5)

    if (selecao5 == 'yuri') {
        pontos += 10;
        console.log("pontos", pontos)

        var result = "";

        if (pontos == 10) {
            result = '<center>Voce acertou 1/5 perguntas, prescisa melhorar!, <br>entre no nosso site e se torne um tripulante da Interprise!</center>'
        } else if (pontos == 20) {
            result = '<center>Voce acertou 2/5 perguntas, prescisa melhorar!, <br>entre no nosso site e se torne um tripulante da Interprise!</center>'
        } else if (pontos == 30) {
            result = '<center>Voce acertou 3/5 perguntas, prescisa melhorar se quiser fazer parte da tripulação, <br>entre no nosso site e se torne um tripulante da Interprise!</center>'
        } else if (pontos == 40) {
            result = '<center>Voce acertou 4/5 perguntas, muito bom! já pode se candidatar a membro da frota!, <br>entre no nosso site e se torne um tripulante da Interprise!</center>'
        } else {
            result = '<center>Voce acertou 5/5 perguntas, já pode se considerar membro da frota estelar!, entre no nosso site e se torne um tripulante da Interprise!</center>'
        }
        conteiner.style.display = "block";
        conteiner.innerHTML = `        
        <div class="questionario">
        <h1>${result}</h1>

        <!-- The Modal -->
                    <div id="myModal" class="modal">

                        <!-- Modal content -->
                        <div class="modal-content">
                            <span class="close">&times;</span>                               
                                <canvas id="myChart" style="position: relative; height:40vh; width:40vw;"></canvas>                           
                        </div>

                    </div>

        <button id="myBtn">Open Modal</button>
        </div>`
    } else if (selecao5 != "yuri") {
        if (pontos == 10) {
            result = '<center>Voce acertou 1/5 perguntas, prescisa melhorar!, <br>entre no nosso site e se torne um tripulante da Interprise!</center>'
        } else if (pontos == 20) {
            result = '<center>Voce acertou 2/5 perguntas, prescisa melhorar!, <br>entre no nosso site e se torne um tripulante da Interprise!</center>'
        } else if (pontos == 30) {
            result = '<center>Voce acertou 3/5 perguntas, prescisa melhorar se quiser fazer parte da tripulação, <br>entre no nosso site e se torne um tripulante da Interprise!</center>'
        } else if (pontos == 40) {
            result = '<center>Voce acertou 4/5 perguntas, muito bom! já pode se candidatar a membro da frota!, br>entre no nosso site e se torne um tripulante da Interprise!</center>'
        } else {
            result = '<center>Voce acertou 5/5 perguntas, já pode se considerar membro da frota estelar!, <br>entre no nosso site<br> e se torne um tripulante da Interprise!</center>'
        }
        conteiner.style.display = "block";
        conteiner.innerHTML = `        
       <div class="questionario">
       <h1>${result}</h1>`
    }
}

// Fim script para quiz