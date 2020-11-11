import { Selector } from 'testcafe';

fixture `Save Contacts`
    .page `https://app.apollo.io/#/login`;

test('Save Contacts 25 at a time', async t => {

    const checkbox = Selector('#provider-mounter > div > div:nth-child(2) > div:nth-child(2) > div > div.zp_1DSCs > div.zp_3cHPT > div.zp_3Lzj1 > div > div > div > div.finder-explorer-sidebar-shown.zp_1cI0A.zp_iYGsF > div.zp_1ybjt > div > div.zp_mtt5S.zp_vXURL > div > div:nth-child(1) > div.zp_3Lc6D > div > div > div');
    const selectPage = Selector('a').withExactText('Select Page')
    const save = Selector('#provider-mounter > div > div:nth-child(2) > div:nth-child(2) > div > div.zp_1DSCs > div.zp_3cHPT > div.zp_3Lzj1 > div > div > div > div.finder-explorer-sidebar-shown.zp_1cI0A.zp_iYGsF > div.zp_1ybjt > div > div.zp_mtt5S.zp_vXURL > div > div:nth-child(1) > div.zp_1Gu3n > div.zp-button.zp_1X3NK.zp_2NNaJ.zp_2T3rz.zp_awepE > div')
    const confirm = Selector('div').withExactText('Confirm')
    const next = Selector('#provider-mounter > div > div:nth-child(2) > div:nth-child(2) > div > div.zp_1DSCs > div.zp_3cHPT > div.zp_3Lzj1 > div > div > div > div.finder-explorer-sidebar-shown.zp_1cI0A.zp_iYGsF > div.zp_1ybjt > div > div.zp_p7Ra4 > div > div > div > div > div.zp_3Lry3 > div > div.zp-button-group.zp_3tokH.zp_3HFM6 > div:nth-child(3) > div > span.zp-icon.mdi.zp_2BRav.zp_35LDu.zp_1D_1M.zp_26M-Z > img')
    await t.maximizeWindow()
    await t.typeText(Selector('#o1-input'),'baz@inploi.com')
    await t.typeText(Selector('#o2-input'),'Apollo22869')
    await t.click(Selector('div').withExactText('Sign In'))
    await t.expect(Selector('i[class="zp-icon mdi mdi-account-multiple zp_2BRav zp_35LDu zp_3AfwY zp_3JjJ7"]').exists).ok()
    await t.click(Selector('i[class="zp-icon mdi mdi-account-multiple zp_2BRav zp_35LDu zp_3AfwY zp_3JjJ7"]'))

    await t.click(Selector('a[href="#/people/saved-searches?sortByField=updated_at&sortAscending=false"]'))
    await t.click(Selector('span').withExactText('Cold Outreach'))

    for (let i = 0; i < 3; i++){
        await t.wait(1000)
        await t.click(checkbox)
        await t.click(selectPage)
        await t.click(save)
        await t.expect(confirm.exists).ok()
        await t.click(confirm)
        await t.wait(5000)
        await t.click(next)
        await t.wait(2000)
    }
    

    
});