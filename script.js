document.getElementById('apply-bg').addEventListener('click',function(){
    applyBlueBg();
})
document.getElementById('friend-3').addEventListener('click',function(){
    const friendThree = document.getElementById('third-friend');
    friendThree.style.textAlign = 'center';
})
document.getElementById('add-new-friend').addEventListener('click',function(){
    const parent = document.getElementById('friends');
    const div = document.createElement('div');
    div.classList.add('friend');
    div.innerHTML = `
    <h3 class="friend-name ">New Friend</h3>
    <p>Something New Added</p>
    `
    parent.appendChild(div);
    applyBlueBg();
})